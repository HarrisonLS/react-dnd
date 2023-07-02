import React from 'react';
import { useDrag, useDragDropManager } from 'react-dnd';

const DraggableComponent = ({ id, children }) => {
  // const dragDropManager = useDragDropManager();
  // const ddmonitor = dragDropManager.getMonitor();
  // console.log('ddmonitor: ', ddmonitor);
  const [{ opacity, item }, drag, dragPreview] = useDrag(() => ({
    type: 'component',
    item: { id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      item: monitor.getItem(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity, display: 'flex', width: 200, height: 200 }}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;

