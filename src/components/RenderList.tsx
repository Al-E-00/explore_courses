import { Course, Lesson, Module } from '../types/types';
import CourseCard from './CourseCard';
import CourseModules from './CourseModules';

type SearchableItem = Course | Module | Lesson;

type RenderListProps = {
  selectedCourse: Course | null;
  setSelectedCourse: React.Dispatch<React.SetStateAction<Course | null>>;
  selectedModule: Module | null;
  setSelectedModule: React.Dispatch<React.SetStateAction<Module | null>>;
  filteredData: SearchableItem[];
};

export default function RenderList({
  selectedCourse,
  setSelectedCourse,
  selectedModule,
  setSelectedModule,
  filteredData,
}: RenderListProps) {
  if (filteredData.length === 0) {
    return (
      <div className="font-bold italic text-gray-500">No results found</div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {!selectedCourse &&
        filteredData.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelectedCourse={setSelectedCourse}
          />
        ))}

      {selectedCourse && (
        <CourseModules
          filteredData={filteredData}
          selectedModule={selectedModule}
          onSelectedModule={setSelectedModule}
        />
      )}
    </div>
  );
}
