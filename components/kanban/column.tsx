'use client';

import { useDroppable } from '@dnd-kit/core';
import { Task } from '@/types/kanban';
import { KanbanTask } from './task';

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

export function KanbanColumn({ id, title, tasks }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 min-h-[500px]"
    >
      <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {title}
        <span className="ml-2 text-sm text-gray-500">({tasks.length})</span>
      </h3>
      <div className="space-y-3">
        {tasks.map((task) => (
          <KanbanTask key={task.id} task={task} columnId={id} />
        ))}
      </div>
    </div>
  );
}