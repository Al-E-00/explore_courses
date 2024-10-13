import { Course, Module } from "../types/types";
import DisplayList from "./ui/DisplayList";
import ModuleLessons from "./ModuleLessons";

type CourseModulesProps = {
  course: Course;
  onBack: () => void;
  selectedModule: Module | null;
  onSelectedModule: (module: Module) => void;
};

export default function CourseModules({
  course,
  onBack,
  selectedModule,
  onSelectedModule,
}: CourseModulesProps) {
  const handleClickModule = (module: Module) => {
    onSelectedModule(module);
  };

  return !selectedModule
    ? course.modules.map((module) => (
        <DisplayList
          key={module.title}
          title={module.title}
          onClick={() => handleClickModule(module)}
        />
      ))
    : selectedModule.lessons.map((lesson) => (
        <ModuleLessons key={lesson.title} lesson={lesson} />
      ));
}
