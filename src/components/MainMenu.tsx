import { useMemo, useEffect, useCallback } from 'react';
import { SearchableItem } from '../types/types';
import SearchBar from './SearchBar';
import BackButton from './ui/BackButton';
import RenderList from './RenderList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/state/store';
import {
  selectCourse,
  selectModule,
} from '@/state/currentCourse/currentCourseSlice';
import { setSearchTerm } from '@/state/UI/uiSlice';
import { coursesFetchAsync } from '@/state/courses/coursesSlice';
import LoaderComponent from './LoaderComponent';
import ErrorComponent from './ErrorComponent';

export default function MainMenu() {
  const dispatch = useDispatch<AppDispatch>();

  const courses = useSelector((state: RootState) => state.courses).courses;

  const selectedCourse = useSelector(
    (state: RootState) => state.currentCourse,
  ).selectedCourse;
  const selectedModule = useSelector(
    (state: RootState) => state.currentCourse,
  ).selectModule;
  const searchTerm = useSelector(
    (state: RootState) => state.uiState,
  ).searchTerm;

  useEffect(() => {
    async function callFetchCourses() {
      await dispatch(coursesFetchAsync());
    }

    callFetchCourses();
  }, []);

  // Reset the searchTerm whenever the selected course or module changes
  useEffect(() => {
    dispatch(setSearchTerm({ searchTerm: '' }));
  }, [selectedCourse, selectedModule]);

  let pageTitle = 'Courses';
  if (selectedModule) {
    pageTitle = 'Lessons';
  } else if (selectedCourse) {
    pageTitle = 'Modules';
  }

  // Compute unfilteredData based on the current selection
  const unfilteredData = useMemo((): SearchableItem[] => {
    if (selectedModule) {
      return selectedModule.lessons;
    } else if (selectedCourse) {
      return selectedCourse.modules;
    } else {
      return courses;
    }
  }, [selectedModule, selectedCourse, courses]);

  // Compute filteredData based on searchTerm
  const filteredData = useMemo((): SearchableItem[] => {
    if (!searchTerm) return unfilteredData;

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return unfilteredData.filter((item) => {
      const titleMatches = item.title
        .toLowerCase()
        .includes(lowercasedSearchTerm);

      // Type guard for 'description'
      const descriptionMatches =
        'description' in item && item.description
          ? item.description.toLowerCase().includes(lowercasedSearchTerm)
          : false;

      // Type guard for 'topics'
      const topicsMatch =
        'topics' in item && item.topics
          ? item.topics.some((topic) =>
              topic.toLowerCase().includes(lowercasedSearchTerm),
            )
          : false;

      return titleMatches || descriptionMatches || topicsMatch;
    });
  }, [unfilteredData, searchTerm]);

  // Handle navigating back to the previous page
  const handleReturnToPreviousPage = useCallback(() => {
    if (selectedModule) {
      dispatch(selectModule({ module: null }));
    } else if (selectedCourse) {
      dispatch(selectCourse({ course: null }));
    }
    dispatch(setSearchTerm({ searchTerm: '' }));
  }, [selectedModule, selectedCourse]);

  if (courses === undefined) return <ErrorComponent />;
  if (courses === null) return <LoaderComponent />;

  return (
    <>
      <h1 className="pb-10 text-3xl font-bold">{pageTitle}</h1>

      <SearchBar title={`Search ${pageTitle}`} searchTerm={searchTerm} />

      {(selectedCourse || selectedModule) && (
        <BackButton onReturnToPreviousPage={handleReturnToPreviousPage} />
      )}

      <RenderList filteredData={filteredData} searchTerm={searchTerm} />
    </>
  );
}
