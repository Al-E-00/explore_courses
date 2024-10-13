type DisplayItemProps = {
  title: string;
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function DisplayItem({
  title,
  description,
  onClick,
  children,
}: DisplayItemProps) {
  return (
    <article
      className="p-4 border-2 border-sky-200 rounded-lg hover:border-sky-300 hover:bg-slate-100 hover:cursor-pointer	 transition-all"
      onClick={onClick}
    >
      <header>
        <h2 className="font-bold">{title || "Untitled Course"}</h2>
      </header>

      <p>{description || null}</p>

      {children}
    </article>
  );
}
