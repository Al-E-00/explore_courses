import { Content, Lesson } from "../types/types";
import DisplayList from "./ui/DisplayList";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import VisualizeLesson from "./VisualizeLesson";

type ModuleLessonsProps = {
  lesson: Lesson;
};

export default function ModuleLessons({ lesson }: ModuleLessonsProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <DisplayList title={lesson.title} description={lesson.description}>
          <ul className="flex gap-2 py-3">
            {lesson.topics.map((topic) => (
              <li
                className="border-2 border-violet-200 rounded-lg px-1 grow-0 text-sm font-semibold bg-gray-50 text-gray-800"
                key={topic}
              >
                {topic}
              </li>
            ))}
          </ul>
        </DisplayList>
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
