type Content = {
  type: "text" | "video" | "podcast" | "audio";
  data: string;
};

type Lesson = {
  title: string;
  description: string;
  topics: string[];
  content: Content[];
};

type Module = {
  title: string;
  lessons: Lesson[];
};

type Course = {
  id: number;
  title: string;
  description: string;
  modules: Module[];
};

export { Course, Module, Lesson, Content };
