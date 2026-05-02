import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTasks } from './useTasks';

describe('useTasks', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('debería inicializar con tareas vacías', () => {
    const { result } = renderHook(() => useTasks());
    expect(result.current.tasks).toEqual([]);
    expect(result.current.filter).toBe('all');
  });

  it('debería agregar una nueva tarea', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Mi primera tarea', 'Descripción');
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe('Mi primera tarea');
    expect(result.current.tasks[0].description).toBe('Descripción');
    expect(result.current.tasks[0].completed).toBe(false);
  });

  it('debería cambiar el estado de completado de una tarea', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Tarea', 'Test');
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(true);

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(false);
  });

  it('debería eliminar una tarea', async () => {
    localStorage.clear(); // Forzar limpieza nuevamente
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Tarea A Eliminar', 'Esta será eliminada');
    });

    await new Promise(resolve => setTimeout(resolve, 50));

    // Obtener el ID de la tarea que agregamos
    const taskToDelete = result.current.tasks.find(t => t.title === 'Tarea A Eliminar');
    expect(taskToDelete).toBeDefined();

    const lengthBeforeDelete = result.current.tasks.length;
    expect(lengthBeforeDelete).toBeGreaterThanOrEqual(1);

    act(() => {
      result.current.deleteTask(taskToDelete!.id);
    });

    await new Promise(resolve => setTimeout(resolve, 50));

    expect(result.current.tasks.length).toBe(lengthBeforeDelete - 1);
    expect(result.current.tasks.find(t => t.id === taskToDelete!.id)).toBeUndefined();
  });

  it('debería filtrar tareas correctamente', () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask('Completada', '');
      result.current.addTask('Pendiente', '');
    });

    const firstTaskId = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(firstTaskId);
    });

    act(() => {
      result.current.setFilter('completed');
    });

    expect(result.current.filter).toBe('completed');
  });

  it('debería persistir tareas en localStorage', () => {
    const { result: result1 } = renderHook(() => useTasks());

    act(() => {
      result1.current.addTask('Tarea persistida', 'Test');
    });

    expect(localStorage.getItem('tasks')).toBeTruthy();

    const { result: result2 } = renderHook(() => useTasks());
    expect(result2.current.tasks).toHaveLength(1);
    expect(result2.current.tasks[0].title).toBe('Tarea persistida');
  });
});
