import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableComponent = ({ onDrop, children, index, moveCard }) => {
  const [collectedProps, drop] = useDrop({
    accept: 'component',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
    }),
    hover(item: { id: string }, monitor) {
      const dragIndex = item.id;
      console.log('dragIndex: ', dragIndex);
      const hoverIndex = index;
      console.log('hoverIndex: ', hoverIndex);

      if (dragIndex === hoverIndex) {
        // eslint-disable-next-line no-useless-return
        return;
      }

      moveCard(dragIndex, hoverIndex);
      // eslint-disable-next-line no-param-reassign
      item.id = hoverIndex;
    },
  });
  console.log('collectedProps: ', collectedProps);


  return (
    <div
      ref={drop}
      data-handler-id={collectedProps.handlerId}
      style={{ backgroundColor: collectedProps.isOver ? 'rgba(7, 207, 248,0.1)' : 'transparent', width: 200, height: 200 }}
    >
      {children}
    </div>
  );
};

export default DroppableComponent;
