import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: props.id });
  //   console.log('transition: ', transition);
  //   console.log('transform: ', transform);

  const { item } = props;
  //   console.log('item: ', item); 

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    background: isDragging ? 'red' : '',
    ...item.style,
  };
  //   console.log('style: ', style);

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {item.component}
    </div>
  );
}
