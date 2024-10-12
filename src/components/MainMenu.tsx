import courses from "../data/courses.json";

type CourseProps = {
  course: {
    id: number;
    title: string;
    description: string;
    modules?: any[];
  };
};

const CourseCard = ({ course }: CourseProps) => (
  <article className="p-4 border-2 border-sky-200 rounded-lg">
    <header>
      <h2 className="font-bold">{course.title || "Untitled Course"}</h2>
      <p>{course.description || "No description available."}</p>
    </header>
  </article>
);

export default function MainMenu() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
