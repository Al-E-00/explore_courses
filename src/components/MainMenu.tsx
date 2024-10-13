import { useState, useMemo, useEffect } from "react";
import courses from "../data/courses.json";
import { Course, Module } from "../types/types";
import SearchBar from "./SearchBar";
import BackButton from "./ui/BackButton";
import RenderList from "./RenderList";

export default function MainMenu() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Reset the searchTerm when opening a new course or module
  useEffect(() => {
    setSearchTerm("");
  }, [selectedCourse, selectedModule]);

  const pageTitle = selectedModule
    ? "Lessons"
    : selectedCourse
      ? "Modules"
      : "Courses";

  // Compute unfilteredData based on the current selection
  const unfilteredData = useMemo(() => {
    if (selectedModule) {
      return selectedModule.lessons;
    } else if (selectedCourse) {
      return selectedCourse.modules;
    } else {
      return courses;
    }
  }, [selectedModule, selectedCourse]);

  // Compute filteredData based on searchTerm
  const filteredData = useMemo(() => {
    if (!searchTerm) return unfilteredData;

    return unfilteredData.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.topics &&
          item.topics.some((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          ))
      );
    });
  }, [unfilteredData, searchTerm]);

  // Handle navigating back to the previous page
  const handleReturnToPreviousPage = () => {
    if (selectedModule) {
      setSelectedModule(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    }
    // Reset the search term
    setSearchTerm("");
  };

  return (
    <>
      <h1 className="font-bold text-3xl pb-10">{pageTitle}</h1>

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
