import { Lesson } from '../types/types';
import LessonCard from './LessonCard';

export default function LessonList({ lessons }: { lessons: Lesson[] }) {
  return (
    <>
      {lessons.map((lesson, index) => (
        <LessonCard key={index} lesson={lesson} />
      ))}
    </>
  );
}
