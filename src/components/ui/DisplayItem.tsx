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
      className="rounded-lg border-2 border-sky-200 p-4 transition-all hover:cursor-pointer hover:border-sky-300 hover:bg-slate-100"
      onClick={onClick}
    >
      <header>
        <h2 className="font-bold">{title || 'Untitled Course'}</h2>
      </header>

      <p>{description || null}</p>

      {children}
    </article>
  );
}
