import React from 'react';
import { Course } from '../types/types';
import CourseCard from './CourseCard';

type CourseListProps = {
  courses: Course[];
  onSelectCourse: React.Dispatch<React.SetStateAction<Course | null>>;
};

export default function CourseList({
  courses,
  onSelectCourse,
}: CourseListProps) {
  return (
    <>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onSelectedCourse={onSelectCourse}
        />
      ))}
    </>
  );
}
