import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Button } from './button';

type BackButtonProps = {
  onReturnToPreviousPage: () => void;
};

export default function BackButton({
  onReturnToPreviousPage,
}: BackButtonProps) {
  return (
    <Button variant="outline" className="mb-4" onClick={onReturnToPreviousPage}>
      <ArrowLeftIcon />
    </Button>
  );
}
