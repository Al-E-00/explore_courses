import { Course, Lesson, Module } from '../types/types';
import { isCourse, isLesson, isModule } from '../lib/utils';
import CourseList from './CourseList';
import ModuleList from './ModuleList';
import LessonList from './LessonList';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';

type SearchableItem = Course | Module | Lesson;

type RenderListProps = {
  filteredData: SearchableItem[] | null | undefined;
  searchTerm: string;
};

export default function RenderList({
  filteredData,
  searchTerm,
}: RenderListProps) {
  const selectedCourse = useSelector(
    (state: RootState) => state.currentCourse,
  ).selectedCourse;
  const selectedModule = useSelector(
    (state: RootState) => state.currentCourse,
  ).selectedModule;

  if (!filteredData) return null;

  if (filteredData.length === 0) {
    return (
      <div className="font-bold italic text-gray-500">
        No results found{searchTerm ? ` for "${searchTerm}"` : ''}.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {!selectedCourse && !selectedModule && (
        <CourseList courses={filteredData.filter(isCourse)} />
      )}

      {selectedCourse && !selectedModule && (
        <ModuleList modules={filteredData.filter(isModule)} />
      )}

      {selectedModule && <LessonList lessons={filteredData.filter(isLesson)} />}
    </div>
  );
}
