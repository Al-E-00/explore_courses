import { Lesson } from '../types/types';
import DisplayItem from './ui/DisplayItem';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import VisualizeLesson from './VisualizeLesson';

type ModuleLessonsProps = {
  lesson: Lesson;
};

export default function ModuleLessons({ lesson }: ModuleLessonsProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <DisplayItem title={lesson.title} description={lesson.description}>
          <ul className="flex flex-col justify-center gap-2 py-3 md:flex-row">
            {lesson.topics.map((topic) => (
              <li
                className="grow-0 rounded-lg border-2 border-violet-200 bg-gray-50 px-1 py-1 text-xs font-semibold text-gray-800 lg:text-sm"
                key={topic}
              >
                {topic}
              </li>
            ))}
          </ul>
        </DisplayItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{lesson.title}</DialogTitle>
          <DialogDescription>
            <VisualizeLesson lessonContent={lesson.content} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
