import { Lesson } from "../types/types";
import DisplayItem from "./ui/DisplayItem";

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
        <DisplayItem title={lesson.title} description={lesson.description}>
          <ul className="flex flex-col justify-center gap-2 py-3 md:flex-row">
            {lesson.topics.map((topic) => (
              <li
                className="border-2 border-violet-200 rounded-lg px-1 py-1 grow-0 text-xs lg:text-sm font-semibold bg-gray-50 text-gray-800"
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
