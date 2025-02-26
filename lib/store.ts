import { create } from 'zustand';
import { TaskStatus, TaskType, Priority } from '@/types/kanban';

export interface Task {
  id: string;
  title: string;
  clientName: string;
  deadline: string;
  priority: Priority;
  type: TaskType;
  status: TaskStatus;
  attachments: string[];
  comments: Comment[];
  columnId: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  id: string;
  text: string;
  userId: string;
  createdAt: string;
}

interface KanbanState {
  columns: Column[];
  tasks: Task[];
  addTask: (task: Task) => void;
  moveTask: (taskId: string, sourceColumn: string, destinationColumn: string) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  addComment: (taskId: string, comment: Comment) => void;
}

interface Column {
  id: string;
  title: string;
  tasks: string[];
}

const defaultColumns: Column[] = [
  { id: 'client-requests', title: 'Client Requests', tasks: [] },
  { id: 'in-preparation', title: 'In Preparation', tasks: [] },
  { id: 'under-audit', title: 'Under Audit', tasks: [] },
  { id: 'completed', title: 'Completed', tasks: [] },
];

export const useKanbanStore = create<KanbanState>((set) => ({
  columns: defaultColumns,
  tasks: [],
  addTask: (task) =>
    set((state) => {
      const column = state.columns.find((col) => col.id === task.columnId);
      if (!column) return state;

      return {
        tasks: [...state.tasks, task],
        columns: state.columns.map((col) =>
          col.id === task.columnId
            ? { ...col, tasks: [...col.tasks, task.id] }
            : col
        ),
      };
    }),
  moveTask: (taskId, sourceColumn, destinationColumn) =>
    set((state) => {
      const source = state.columns.find((col) => col.id === sourceColumn);
      const destination = state.columns.find((col) => col.id === destinationColumn);
      if (!source || !destination) return state;

      return {
        ...state,
        columns: state.columns.map((col) => {
          if (col.id === sourceColumn) {
            return { ...col, tasks: col.tasks.filter((id) => id !== taskId) };
          }
          if (col.id === destinationColumn) {
            return { ...col, tasks: [...col.tasks, taskId] };
          }
          return col;
        }),
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, columnId: destinationColumn } : task
        ),
      };
    }),
  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      ),
    })),
  addComment: (taskId, comment) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, comments: [...task.comments, comment] }
          : task
      ),
    })),
}));