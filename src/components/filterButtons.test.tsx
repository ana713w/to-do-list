import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButtons from './filterButtons';

// Mock del contexto
vi.mock('../contexts/taskContext', () => ({
  useTaskContext: vi.fn(),
}));

import { useTaskContext } from '../contexts/taskContext';

describe('FilterButtons', () => {
  it('debería renderizar tres botones de filtro', () => {
    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [],
      filter: 'all',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: vi.fn(),
      deleteTask: vi.fn(),
    });

    render(<FilterButtons />);

    expect(screen.getByRole('button', { name: /todas/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pendientes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /completadas/i })).toBeInTheDocument();
  });

  it('debería llamar setFilter cuando se hace click en un botón', async () => {
    const user = userEvent.setup();
    const mockSetFilter = vi.fn();

    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [],
      filter: 'all',
      setFilter: mockSetFilter,
      addTask: vi.fn(),
      toggleTask: vi.fn(),
      deleteTask: vi.fn(),
    });

    render(<FilterButtons />);

    const pendientesButton = screen.getByRole('button', { name: /pendientes/i });
    await user.click(pendientesButton);

    expect(mockSetFilter).toHaveBeenCalledWith('pending');
  });

  it('debería marcar el filtro activo', () => {
    vi.mocked(useTaskContext).mockReturnValue({
      tasks: [],
      filter: 'pending',
      setFilter: vi.fn(),
      addTask: vi.fn(),
      toggleTask: vi.fn(),
      deleteTask: vi.fn(),
    });

    render(<FilterButtons />);

    const pendientesButton = screen.getByRole('button', { name: /pendientes/i });
    expect(pendientesButton).toHaveClass('bg-white');
  });
});
