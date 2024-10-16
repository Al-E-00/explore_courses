import { useDispatch } from 'react-redux';
import { Course } from '../types/types';
import DisplayItem from './ui/DisplayItem';
import { selectCourse } from '@/state/currentCourse/currentCourseSlice';

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  const dispatch = useDispatch();

  return (
    <DisplayItem
      description={course.description}
      title={course.title}
      onClick={() => dispatch(selectCourse({ course: course }))}
    />
  );
}
