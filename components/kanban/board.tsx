'use client';

import { useKanbanStore } from '@/lib/store';
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { KanbanColumn } from './column';
import { useState } from 'react';
import { TaskDialog } from './task-dialog';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export function KanbanBoard() {
  const { columns, tasks, moveTask } = useKanbanStore();
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id as string;
    const sourceColumn = active.data.current?.columnId as string;
    const destinationColumn = over.id as string;

    if (sourceColumn !== destinationColumn) {
      moveTask(taskId, sourceColumn, destinationColumn);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Board</h1>
        <Button
          onClick={() => setIsNewTaskDialogOpen(true)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </div>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={tasks.filter((task) => task.columnId === column.id)}
            />
          ))}
        </div>
      </DndContext>

      <TaskDialog
        open={isNewTaskDialogOpen}
        onOpenChange={setIsNewTaskDialogOpen}
      />
    </div>
  );
}