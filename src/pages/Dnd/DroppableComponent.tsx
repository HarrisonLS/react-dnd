import { useDrop } from 'react-dnd';

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const DroppableComponent = ({ index, moveCard, children }) => {
  const [collectDropProps, drop] = useDrop({
    accept: 'component',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
      };
    },
    hover(item: DragItem, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  return (
    <div
      ref={drop}
      data-handler-id={collectDropProps.handlerId}
      style={{ backgroundColor: collectDropProps.isOver ? 'rgba(7, 207, 248,0.1)' : 'transparent', height: '100%' }}
    >
      {children}
    </div>
  );
};

export default DroppableComponent;
