import { Input } from './ui/input';

type SearchBarProps = {
  title: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({
  title,
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div>
      <Input
        placeholder={title}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="mb-4"
      />
    </div>
  );
}
