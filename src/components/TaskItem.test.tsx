import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from './TaskItem';
import type { Task } from '../types/task';

// Mock del contexto
vi.mock('../contexts/taskContext', () => ({
  useTaskContext: vi.fn(),
}));

import { useTaskContext } from '../contexts/taskContext';

describe('TaskItem', () => {
  const mockTask: Task = {
    id: '1',
    title: 'Test Task',
    description: 'Test Description',
    completed: false,
    createdAt: Date.now(),
  };

  it('debería renderizar la tarea con su título', () => {
    const mockToggle = vi.fn();
    const mockDelete = vi.fn();

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [mockTask],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: mockToggle,
      deleteTask: mockDelete,
    });

    render(<TaskItem task={mockTask} />);

    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('debería mostrar la descripción de la tarea', () => {
    const mockToggle = vi.fn();
    const mockDelete = vi.fn();

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [mockTask],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: mockToggle,
      deleteTask: mockDelete,
    });

    render(<TaskItem task={mockTask} />);

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('debería llamar toggleTask cuando se marca como completada', async () => {
    const user = userEvent.setup();
    const mockToggle = vi.fn();
    const mockDelete = vi.fn();

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [mockTask],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: mockToggle,
      deleteTask: mockDelete,
    });

    render(<TaskItem task={mockTask} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(mockToggle).toHaveBeenCalledWith('1');
  });

  it('debería llamar deleteTask cuando se elimina', async () => {
    const user = userEvent.setup();
    const mockToggle = vi.fn();
    const mockDelete = vi.fn();

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [mockTask],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: mockToggle,
      deleteTask: mockDelete,
    });

    render(<TaskItem task={mockTask} />);

    const deleteButton = screen.getByRole('button');
    await user.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith('1');
  });

  it('debería mostrar estilo diferente cuando está completada', () => {
    const mockToggle = vi.fn();
    const mockDelete = vi.fn();
    const completedTask = { ...mockTask, completed: true };

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [completedTask],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: mockToggle,
      deleteTask: mockDelete,
    });

    render(<TaskItem task={completedTask} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
