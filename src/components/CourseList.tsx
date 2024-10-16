import { Course } from '../types/types';
import CourseCard from './CourseCard';

type CourseListProps = {
  courses: Course[];
};

export default function CourseList({ courses }: CourseListProps) {
  return courses.map((course) => (
    <CourseCard key={course.id} course={course} />
  ));
}
