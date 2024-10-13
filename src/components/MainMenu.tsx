import { useState, useMemo, useEffect, useCallback } from 'react';
import courses from '../data/courses.json';
import { Course, Module, SearchableItem } from '../types/types';
import SearchBar from './SearchBar';
import BackButton from './ui/BackButton';
import RenderList from './RenderList';

export default function MainMenu() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Reset the searchTerm whenever the selected course or module changes
  useEffect(() => {
    setSearchTerm('');
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
  }, [selectedModule, selectedCourse]);

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
      setSelectedModule(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
    setSearchTerm('');
  }, [selectedModule, selectedCourse]);

  return (
    <>
      <h1 className="pb-10 text-3xl font-bold">{pageTitle}</h1>

      <SearchBar
        title={`Search ${pageTitle}`}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {(selectedCourse || selectedModule) && (
        <BackButton onReturnToPreviousPage={handleReturnToPreviousPage} />
      )}

      <RenderList
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        selectedModule={selectedModule}
        setSelectedModule={setSelectedModule}
        filteredData={filteredData}
      />
    </>
  );
}
