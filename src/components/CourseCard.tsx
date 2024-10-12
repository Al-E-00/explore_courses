import { CourseProps } from "../types/types";

export default function CourseCard({ course }: CourseProps) {
  return (
    <article className="p-4 border-2 border-sky-200 rounded-lg hover:border-sky-300 hover:bg-slate-100 hover:cursor-pointer	 transition-all ">
      <header>
        <h2 className="font-bold">{course.title || "Untitled Course"}</h2>
        <p>{course.description || "No description available."}</p>
      </header>
    </article>
  );
}
