import { Content } from "../types/types";

type VisualizeLessonProps = {
  lessonContent: Content[];
};

function renderContent(content: Content) {
  switch (content.type) {
    case "text":
      return <p className="py-3">{content.data}</p>;
    case "video":
      return <video className="w-[100%] " src={content.data} controls />;
    case "podcast":
      return <audio className="w-[100%]" src={content.data} controls />;
    case "audio":
      return <audio className="w-[100%]" src={content.data} controls />;
    default:
      return null;
  }
}

export default function VisualizeLesson({
  lessonContent,
}: VisualizeLessonProps) {
  return lessonContent.map((content, index) => (
    <div key={index}>{renderContent(content)}</div>
  ));
}
