'use client'

import { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from "@/app/ui/components/sortableItem";
import { Option } from "@prisma/client";
import Image from "next/image";

export function ScaleQuestion({ options }: { options: Option[] }) {
  const optionsMap = new Map(options.map(option => [option.id, option]));
  const [items, setItems] = useState(options.map(option => option.id));
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <div className="pb-1">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-3">
            {items.map((id, index) => (
              <SortableItem key={id} id={id}>
                <div className="flex hover:bg-gray-100 hover:rounded-md p-1">
                  <Image src="/draggabledots.svg" alt="Draggable icon" width={24} height={24} />
                  <span><span className="bg-gray-200 rounded px-1">{index + 1}</span> {optionsMap.get(id)?.text}</span>
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <input name="question" type="hidden" value={items.toString()} readOnly />
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id as number);
        const newIndex = items.indexOf(over?.id as number);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
