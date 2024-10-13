import { Module } from '../types/types';
import DisplayItem from './ui/DisplayItem';

type ModuleListProps = {
  modules: Module[];
  onSelectModule: React.Dispatch<React.SetStateAction<Module | null>>;
};

export default function ModuleList({
  modules,
  onSelectModule,
}: ModuleListProps) {
  return (
    <>
      {modules.map((module, index) => (
        <DisplayItem
          key={index}
          title={module.title}
          onClick={() => onSelectModule(module)}
        />
      ))}
    </>
  );
}
