import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';
import type { Task } from '../types/task';

// Mock del contexto
vi.mock('../contexts/taskContext', () => ({
  useTaskContext: vi.fn(),
}));

import { useTaskContext } from '../contexts/taskContext';

describe('TaskList', () => {
  it('debería renderizar lista vacía cuando no hay tareas', () => {
    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: vi.fn(),
      deleteTask: vi.fn(),
    });

    render(<TaskList />);
    expect(screen.getByText(/sin tareas por aquí/i)).toBeInTheDocument();
  });

  it('debería renderizar todas las tareas', () => {
    const tasks: Task[] = [
      {
        id: '1',
        title: 'Tarea 1',
        description: 'Desc 1',
        completed: false,
        createdAt: Date.now(),
      },
      {
        id: '2',
        title: 'Tarea 2',
        description: 'Desc 2',
        completed: true,
        createdAt: Date.now(),
      },
    ];

    vi.mocked(useTaskContext).mockReturnValue({
      tasks,
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: vi.fn(),
      deleteTask: vi.fn(),
    });

    render(<TaskList />);

    expect(screen.getByText('Tarea 1')).toBeInTheDocument();
    expect(screen.getByText('Tarea 2')).toBeInTheDocument();
  });

  it('debería filtrar tareas pendientes', () => {
    const pendingTask: Task = {
      id: '2',
      title: 'Pendiente',
      description: '',
      completed: false,
      createdAt: Date.now(),
    };

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [pendingTask],
      filter: 'pending',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: vi.fn(),
      deleteTask: vi.fn(),
    });

    render(<TaskList />);

    expect(screen.getByText('Pendiente')).toBeInTheDocument();
  });
});
