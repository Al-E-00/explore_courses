import React from 'react';
import { Course, Lesson, Module } from '../types/types';
import { isCourse, isLesson, isModule } from '../lib/utils';
import CourseList from './CourseList';
import ModuleList from './ModuleList';
import LessonList from './LessonList';

type SearchableItem = Course | Module | Lesson;

type RenderListProps = {
  selectedCourse: Course | null;
  setSelectedCourse: React.Dispatch<React.SetStateAction<Course | null>>;
  selectedModule: Module | null;
  setSelectedModule: React.Dispatch<React.SetStateAction<Module | null>>;
  filteredData: SearchableItem[];
  searchTerm: string;
};

export default function RenderList({
  selectedCourse,
  setSelectedCourse,
  selectedModule,
  setSelectedModule,
  filteredData,
  searchTerm,
}: RenderListProps) {
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
        <CourseList
          courses={filteredData.filter(isCourse)}
          onSelectCourse={setSelectedCourse}
        />
      )}

      {selectedCourse && !selectedModule && (
        <ModuleList
          modules={filteredData.filter(isModule)}
          onSelectModule={setSelectedModule}
        />
      )}

      {selectedModule && <LessonList lessons={filteredData.filter(isLesson)} />}
    </div>
  );
}
