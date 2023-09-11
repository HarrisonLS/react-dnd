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
    console.log('newItems: ', newItems);

    setList(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="dropBoard">
          {(provided) => (
            <div className={styles.container} ref={provided.innerRef} {...provided.droppableProps}>
              {list && list.length > 0 && (
                <>
                  <Draggable draggableId={'column0'} index={0}>
                    {(columnProvided, snapshot) => (
                      <div
                        className={styles.first}
                        ref={columnProvided.innerRef}
                        {...columnProvided.draggableProps}
                        {...columnProvided.dragHandleProps}
                      >
                        {list.slice(0, 3).map((item, index) => (
                          <div key={index} style={{ flex: index === 0 ? 1 : 2, padding: '20px' }}>
                            <Draggable draggableId={item.id} key={item.id} index={index}>
                              {(itemProvided1) => (
                                <div
                                  ref={itemProvided1.innerRef}
                                  {...itemProvided1.draggableProps}
                                  {...itemProvided1.dragHandleProps}
                                  style={{ height: '100%' }}
                                >
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
                    {(columnProvided, snapshot) => (
                      <div
                        className={styles.second}
                        ref={columnProvided.innerRef}
                        {...columnProvided.draggableProps}
                        {...columnProvided.dragHandleProps}
                      >
                        {list.slice(3, 5).map((item, index) => (
                          <div key={index} style={{ flex: 2, padding: '20px' }}>
                            <Draggable draggableId={item.id} key={item.id} index={index}>
                              {(itemProvided2) => (
                                <div
                                  ref={itemProvided2.innerRef}
                                  {...itemProvided2.draggableProps}
                                  {...itemProvided2.dragHandleProps}
                                  style={{ height: '100%' }}
                                >
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
                    {(columnProvided, snapshot) => (
                      <div
                        className={styles.third}
                        ref={columnProvided.innerRef}
                        {...columnProvided.draggableProps}
                        {...columnProvided.dragHandleProps}
                      >
                        {list.slice(5, 8).map((item, index) => (
                          <div key={index} style={{ flex: 2, padding: '20px' }}>
                            <Draggable draggableId={item.id} key={item.id} index={index}>
                              {(itemProvided3) => (
                                <div
                                  ref={itemProvided3.innerRef}
                                  {...itemProvided3.draggableProps}
                                  {...itemProvided3.dragHandleProps}
                                  style={{ height: '100%' }}
                                >
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
