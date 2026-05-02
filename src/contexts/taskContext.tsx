import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Task, FilterType } from '../types/task';
import { useTasks } from '../hooks/useTasks';

export interface TaskContextType {
  tasks: Task[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  addTask: (title: string, description: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const taskData = useTasks();
  return <TaskContext.Provider value={taskData}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTaskContext debe usarse dentro de TaskProvider');
  return ctx;
};
