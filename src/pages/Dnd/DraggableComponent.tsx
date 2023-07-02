import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ id, index, children }) => {
  const [collectDragProps, drag] = useDrag(() => ({
    type: 'component',
    item: { id, index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      item: monitor.getItem(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: collectDragProps.opacity, height: '100%' }}>
      {children}
    </div>
  );
};

export default DraggableComponent;
