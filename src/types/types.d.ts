type Content = {
  type: string;
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

type SearchableItem = Course | Module | Lesson;

export { Course, Module, Lesson, Content, SearchableItem };
