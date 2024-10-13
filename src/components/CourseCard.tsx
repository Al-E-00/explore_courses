import { Course } from "../types/types";
import DisplayList from "./ui/DisplayList";

type CourseCardProps = {
  course: Course;
  onSelectedCourse: (course: Course) => void;
};

export default function CourseCard({
  course,
  onSelectedCourse,
}: CourseCardProps) {
  const handleSelectedCourse = (course: Course) => {
    onSelectedCourse(course);
  };

  return (
    <>
      <DisplayList
        description={course.description}
        title={course.title}
        onClick={() => handleSelectedCourse(course)}
      />
    </>
  );
}
