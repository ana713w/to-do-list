import { useTaskContext } from '../contexts/taskContext';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <li className={`group flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 mb-2 ${
      task.completed
        ? 'bg-slate-50 border-slate-100'
        : 'bg-white border-slate-100 hover:border-violet-200 hover:shadow-sm'
    }`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="checkbox-custom mt-0.5"
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-snug ${
          task.completed ? 'line-through text-slate-400' : 'text-slate-800'
        }`}>
          {task.title}
        </p>
        {task.description && (
          <p className={`text-xs mt-0.5 leading-relaxed ${
            task.completed ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {task.description}
          </p>
        )}
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all duration-150 flex-shrink-0"
        title="Eliminar"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
  );
}
