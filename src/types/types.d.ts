type ContentProps = {
  type: "text" | "video" | "podcast" | "audio";
  data: string;
};

type LessonsProps = {
  title: string;
  description: string;
  topics: string[];
  content: ContentProps[];
};

type ModuleProps = {
  modules: {
    title: string;
    lessons: LessonsProps[];
  }[];
};

type CourseProps = {
  course: {
    id: number;
    title: string;
    description: string;
    modules: ModuleProps[];
  };
};

export { CourseProps, ModuleProps, LessonsProps, ContentProps };
