import type { Identifier, XYCoord } from 'dnd-core';
import type { FC } from 'react';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  // padding: '0.5rem 1rem',
  margin: '20px',
  // backgroundColor: 'white',
  cursor: 'move',
};

export interface CardProps {
  id: any;
  index: number;
  children: any;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const DndComponent: FC<CardProps> = ({ id, index, moveCard, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [collectDropProps, drop] = useDrop({
    accept: 'component',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [collectDragProps, drag] = useDrag({
    type: 'component',
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <div
      ref={ref}
      data-handler-id={collectDropProps.handlerId}
      style={{
        opacity: collectDragProps.isDragging ? 0.2 : 1,
        backgroundColor: collectDropProps.isOver ? 'rgba(7, 207, 248,0.4)' : 'yellowgreen',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
