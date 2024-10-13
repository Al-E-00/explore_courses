import { useEffect, useState } from "react";
import { Course, Lesson, Module } from "../types/types";
import { Input } from "./ui/input";
import { useDebounceCallback } from "usehooks-ts";

type SearchBarProps = {
  title: string;
  searchData: Course[] | Module[] | Lesson[];
  dataType: "module" | "lesson" | "course";
  onSearchDataFiltered: (filteredData: Course[] | Module[] | Lesson[]) => void;
};

export default function SearchBar({
  title,
  searchData,
  dataType,
  onSearchDataFiltered,
}: SearchBarProps) {
  const [searchedParameter, setSearchedParameter] = useState<string>("");

  const handleSearchDebounced = useDebounceCallback(
    (searchedParameter: string) => {
      let filteredData: Course[] | Module[] | Lesson[] = [];

      if (dataType === "course") {
        filteredData = (searchData as Course[]).filter((course) =>
          course.title.toLowerCase().includes(searchedParameter.toLowerCase())
        );
      } else if (dataType === "module") {
        filteredData = (searchData as Module[]).filter((module) =>
          module.title.toLowerCase().includes(searchedParameter.toLowerCase())
        );
      } else if (dataType === "lesson") {
        filteredData = (searchData as Lesson[]).filter((lesson) =>
          lesson.title.toLowerCase().includes(searchedParameter.toLowerCase())
        );
      }

      onSearchDataFiltered(filteredData);
    },
    300
  );

  useEffect(() => {
    setSearchedParameter("");
    onSearchDataFiltered(searchData);
  }, [dataType]);

  return (
    <div>
      <Input
        placeholder={title}
        onChange={(e) => {
          const searchedParameter = e.target.value;
          setSearchedParameter(searchedParameter);
          handleSearchDebounced(searchedParameter);
        }}
        value={searchedParameter}
        className="mb-4"
      />
    </div>
  );
}
