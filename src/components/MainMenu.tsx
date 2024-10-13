import { useState } from "react";
import courses from "../data/courses.json";
import CourseCard from "./CourseCard";

import { Course, Module } from "../types/types";
import CourseModules from "./CourseModules";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function MainMenu() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleReturnToPreviousPage = () => {
    if (selectedModule) {
      setSelectedModule(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl pb-10">{`${selectedModule ? "Modules" : selectedCourse ? "Lessons" : "Courses"}`}</h1>

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
          courses.map((course) => (
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
