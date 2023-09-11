import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './index.module.css';
import Item from './Item';

const Column = (props) => {
  const list = props.list;
  return (
    <Draggable draggableId={'column0'} index={0}>
      {(provided, snapshot) => (
        <div className={styles.first} ref={provided.innerRef} {...provided.draggableProps}>
          {list.slice(0, 3).map((item, index) => (
            <Item item={item} index={index} />
          ))}
        </div>
      )}
    </Draggable>
  );
};

export default Column;
