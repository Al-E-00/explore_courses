import { useDispatch } from 'react-redux';
import { Input } from './ui/input';
import { setSearchTerm } from '@/state/UI/uiSlice';

type SearchBarProps = {
  title: string;
  searchTerm: string;
};

export default function SearchBar({ title, searchTerm }: SearchBarProps) {
  const dispatch = useDispatch();

  return (
    <Input
      placeholder={title}
      onChange={(e) => dispatch(setSearchTerm({ searchTerm: e.target.value }))}
      value={searchTerm}
      className="mb-4"
    />
  );
}
