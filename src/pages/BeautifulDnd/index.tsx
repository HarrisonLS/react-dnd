import React, { useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import styles from './index.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface ChartItem {
  id: string;
  component: JSX.Element;
}

const Dnd = () => {
  const [list, setList] = useState<any>([
    {
      id: '0',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'blue', display: 'inline-block' }}>Drag me1!</div>
      ),
    },
    {
      id: '1',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'yellow', display: 'inline-block' }}>Drag me2!</div>
      ),
    },
    {
      id: '2',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'red', display: 'inline-block' }}>Drag me3!</div>
      ),
    },
    {
      id: '3',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'pink', display: 'inline-block' }}>Drag me4!</div>
      ),
    },
    {
      id: '4',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'green', display: 'inline-block' }}>Drag me5!</div>
      ),
    },
    {
      id: '5',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'purple', display: 'inline-block' }}>Drag me6!</div>
      ),
    },
    {
      id: '6',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'yellowgreen', display: 'inline-block' }}>
          Drag me7!
        </div>
      ),
    },
    {
      id: '7',
      component: (
        <div style={{ width: '100%', height: '100%', background: 'black', display: 'inline-block' }}>Drag me8!</div>
      ),
    },
  ]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragStart = () => {
    /*...*/
  };
  const onDragUpdate = () => {
    /*...*/
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(list, result.source.index, result.destination.index);

    setList(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list && list.length > 0 && (
                <>
                  <Draggable draggableId={'column0'} index={0}>
                    {(provided, snapshot) => (
                      <div className={styles.first} ref={provided.innerRef} {...provided.draggableProps}>
                        {list.slice(0, 3).map((item, index) => (
                          <div key={index} style={{ flex: index === 0 ? 1 : 2, padding: '20px' }}>
                            <Draggable draggableId={item.id} key={item.id} index={index}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  {item.component}
                                </div>
                              )}
                            </Draggable>
                          </div>
                        ))}
                      </div>
                    )}
                  </Draggable>

                  <Draggable draggableId={'column1'} index={1}>
                    {(provided, snapshot) => (
                      <div className={styles.second} ref={provided.innerRef} {...provided.draggableProps}>
                        {list.slice(3, 5).map((item, index) => (
                          <div key={index} style={{ flex: 2, padding: '20px' }}>
                            <Draggable draggableId={item.id} key={item.id} index={index}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  {item.component}
                                </div>
                              )}
                            </Draggable>
                          </div>
                        ))}
                      </div>
                    )}
                  </Draggable>
                  <Draggable draggableId={'column2'} index={2}>
                    {(provided, snapshot) => (
                      <div className={styles.third} ref={provided.innerRef} {...provided.draggableProps}>
                        {list.slice(5, 8).map((item, index) => (
                          <div key={index} style={{ flex: 2, padding: '20px' }}>
                            <Draggable draggableId={item.id} key={item.id} index={index}>
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  {item.component}
                                </div>
                              )}
                            </Draggable>
                          </div>
                        ))}
                      </div>
                    )}
                  </Draggable>
                </>
              )}
            </div>
          )}
        </Droppable>
        {/* {renderDnd()} */}
        {/* <DndProvider backend={HTML5Backend}>{list.map((item, i) => renderDnd(item, i))}</DndProvider> */}
      </div>
    </DragDropContext>
  );
};

export default Dnd;
