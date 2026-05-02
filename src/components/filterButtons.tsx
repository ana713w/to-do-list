import { useTaskContext } from "../contexts/taskContext";

const filters = [
  { key: 'all', label: 'Todas' },
  { key: 'pending', label: 'Pendientes' },
  { key: 'completed', label: 'Completadas' },
] as const;

export default function FilterButtons() {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="flex gap-2 mb-5 bg-slate-100 p-1 rounded-xl">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
            filter === key
              ? 'bg-white text-violet-700 shadow-sm shadow-slate-200 font-semibold'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
