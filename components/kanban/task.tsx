'use client';

import { Task, Priority } from '@/types/kanban';
import { useDraggable } from '@dnd-kit/core';
import { format } from 'date-fns';
import { Calendar, Paperclip } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

interface KanbanTaskProps {
  task: Task;
  columnId: string;
}

const priorityColors = {
  [Priority.HIGH]: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  [Priority.MEDIUM]: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  [Priority.LOW]: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
};

export function KanbanTask({ task, columnId }: KanbanTaskProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: {
      columnId,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 cursor-move hover:shadow-md transition-shadow bg-white dark:bg-gray-700"
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h4 className="font-medium text-sm line-clamp-2">{task.title}</h4>
          <Badge
            variant="secondary"
            className={cn(
              'ml-2 whitespace-nowrap',
              priorityColors[task.priority]
            )}
          >
            {task.priority}
          </Badge>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          {task.clientName}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {format(new Date(task.deadline), 'MMM dd')}
          </div>
          {task.attachments.length > 0 && (
            <div className="flex items-center">
              <Paperclip className="w-4 h-4 mr-1" />
              {task.attachments.length}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}