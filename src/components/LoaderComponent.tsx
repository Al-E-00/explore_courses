import { Skeleton } from '@/components/ui/skeleton';

export default function LoaderComponent() {
  return (
    <div className="flex w-[100%] flex-col space-y-3">
      <Skeleton className="h-[36px] w-[10rem] rounded-xl" />
      <div className="pt-8">
        <Skeleton className="h-2 pt-10" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    </div>
  );
}
