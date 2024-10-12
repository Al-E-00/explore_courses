import courses from "../data/courses.json";
import CourseCard from "./CourseCard";

export default function MainMenu() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
