import { useTaskContext } from '../contexts/taskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-2xl mb-3">
          <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-slate-500 text-sm font-medium">Sin tareas por aquí</p>
        <p className="text-slate-400 text-xs mt-1">Agrega una tarea para comenzar</p>
      </div>
    );
  }

  return (
    <ul className="list-none">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
