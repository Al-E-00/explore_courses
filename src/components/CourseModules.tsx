import { Lesson, Module } from '../types/types';
import DisplayItem from './ui/DisplayItem';
import ModuleLessons from './ModuleLessons';

// Update the type to accept filteredData
type CourseModulesProps = {
  filteredData: Module[] | Lesson[];
  selectedModule: Module | null;
  onSelectedModule: (module: Module) => void;
};

// Update the component function parameters
export default function CourseModules({
  filteredData,
  selectedModule,
  onSelectedModule,
}: CourseModulesProps) {
  const handleClickModule = (module: Module) => {
    onSelectedModule(module);
  };

  if (!selectedModule) {
    // Render filtered modules
    const modules = filteredData as Module[];
    return (
      <>
        {modules.map((module) => (
          <DisplayItem
            key={module.title}
            title={module.title}
            onClick={() => handleClickModule(module)}
          />
        ))}
      </>
    );
  } else {
    // Render filtered lessons
    const lessons = filteredData as Lesson[];
    return (
      <>
        {lessons.map((lesson) => (
          <ModuleLessons key={lesson.title} lesson={lesson} />
        ))}
      </>
    );
  }
}
