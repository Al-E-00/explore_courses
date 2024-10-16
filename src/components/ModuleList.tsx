import { useDispatch } from 'react-redux';
import { Module } from '../types/types';
import DisplayItem from './ui/DisplayItem';
import { selectModule } from '@/state/currentCourse/currentCourseSlice';

type ModuleListProps = {
  modules: Module[];
};

export default function ModuleList({ modules }: ModuleListProps) {
  const dispatch = useDispatch();

  return modules.map((module, index) => (
    <DisplayItem
      key={index}
      title={module.title}
      onClick={() => dispatch(selectModule({ module: module }))}
    />
  ));
}
