import { useState } from "react";
import courses from "../data/courses.json";
import CourseCard from "./CourseCard";

import { Course, Lesson, Module } from "../types/types";
import CourseModules from "./CourseModules";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import SearchBar from "./SearchBar";

export default function MainMenu() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);

  const handleReturnToPreviousPage = () => {
    if (selectedModule) {
      setSelectedModule(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };

  const pageTitle = selectedModule
    ? "Lessons"
    : selectedCourse
      ? "Modules"
      : "Courses";

  const handleSearchDataFiltered = (
    filteredData: Course[] | Module[] | Lesson[]
  ) => {
    if (selectedCourse) {
      setSelectedCourse({
        ...selectedCourse,
        modules: filteredData as Module[],
      });
    } else {
      setFilteredCourses(filteredData as Course[]);
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl pb-10">{pageTitle}</h1>

      <SearchBar
        title={`Search ${pageTitle}`}
        dataType={
          selectedModule ? "lesson" : selectedCourse ? "module" : "course"
        }
        searchData={
          selectedModule
            ? selectedCourse?.modules || []
            : selectedCourse
              ? selectedCourse.modules
              : courses
        }
        onSearchDataFiltered={handleSearchDataFiltered}
      />

      {selectedCourse && (
        <Button
          variant="outline"
          className="mb-4"
          onClick={handleReturnToPreviousPage}
        >
          <ArrowLeftIcon />
        </Button>
      )}

      <div className="grid grid-cols-2 gap-4">
        {!selectedCourse &&
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectedCourse={setSelectedCourse}
            />
          ))}

        {selectedCourse && (
          <CourseModules
            course={selectedCourse}
            onBack={() => setSelectedCourse(null)}
            selectedModule={selectedModule}
            onSelectedModule={setSelectedModule}
          />
        )}
      </div>
    </>
  );
}
