import { Course } from '../types/types';
import DisplayItem from './ui/DisplayItem';

type CourseCardProps = {
  course: Course;
  onSelectedCourse: (course: Course) => void;
};

export default function CourseCard({
  course,
  onSelectedCourse,
}: CourseCardProps) {
  const handleSelectedCourse = () => {
    onSelectedCourse(course);
  };

  return (
    <DisplayItem
      description={course.description}
      title={course.title}
      onClick={handleSelectedCourse}
    />
  );
}
