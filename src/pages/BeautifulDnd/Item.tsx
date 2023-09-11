import { Draggable } from 'react-beautiful-dnd';
import styles from './index.module.css';

const Item = (props) => {
  const { index, item } = props;
  return (
    <div key={index} style={{ flex: index === 0 ? 1 : 2, padding: '20px' }}>
      <Draggable draggableId={item.id} key={item.id} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {item.component}
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default Item;
