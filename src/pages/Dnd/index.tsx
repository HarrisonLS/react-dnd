import React, { useCallback, useEffect, useState } from 'react';
import DraggableComponent from './DraggableComponent';
import DroppableComponent from './DroppableComponent';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDragDropManager } from 'react-dnd';
import update from 'immutability-helper';
import { DndComponent } from './DndComponent';
import styles from './index.module.css';

interface ChartItem {
  id: string;
  component: JSX.Element;
}

const Dnd = () => {
  const [list, setList] = useState<ChartItem[]>([
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

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log('dragIndex: ', dragIndex);
    setList((prevCards: ChartItem[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as ChartItem],
        ],
      }),
    );
  }, []);

  // const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
  //   if (dragIndex === hoverIndex) {
  //     return;
  //   }
  //   console.log('hoverIndex: ', hoverIndex);
  //   console.log('dragIndex: ', dragIndex);
  //   const newList = list;
  //   let temp = newList[dragIndex];
  //   newList[dragIndex] = newList[hoverIndex];
  //   newList[hoverIndex] = temp;
  //   // [temp[dragIndex], temp[hoverIndex]] = [temp[hoverIndex], temp[dragIndex]];
  //   console.log('temp: ', temp);
  //   console.log('newList: ', newList);

  //   setList(newList);
  // }, []);

  // const renderDnd = useCallback((ele: ChartItem, index) => {
  //   return (
  //     <DndComponent key={ele.id} index={index} id={ele.id} moveCard={moveCard}>
  //       {ele.component}
  //     </DndComponent>
  //   );
  // }, []);

  const renderDnd = useCallback(() => {
    return (
      <>
        <div className={styles.first}>
          {list.slice(0, 3).map((item, index) => (
            <div key={item.id} style={{ flex: index === 0 ? 1 : 2, padding: '20px' }}>
              <DroppableComponent index={index} moveCard={moveCard}>
                <DraggableComponent id={String(index)} index={index}>
                  {item.component}
                </DraggableComponent>
              </DroppableComponent>
            </div>
          ))}
        </div>

        <div className={styles.second}>
          {list.slice(3, 5).map((item, index) => (
            <div key={item.id} style={{ flex: 2, padding: '20px' }}>
              <DroppableComponent index={index + 3} moveCard={moveCard}>
                <DraggableComponent id={String(index + 3)} index={index + 3}>
                  {item.component}
                </DraggableComponent>
              </DroppableComponent>
            </div>
          ))}
        </div>

        <div className={styles.third}>
          {list.slice(5, 8).map((item, index) => (
            <div key={item.id} style={{ flex: 2, padding: '20px' }}>
              <DroppableComponent index={index + 5} moveCard={moveCard}>
                <DraggableComponent id={String(index + 5)} index={index + 5}>
                  {item.component}
                </DraggableComponent>
              </DroppableComponent>
            </div>
          ))}
        </div>
      </>
    );
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        {list && list.length > 0 && (
          <>
            <div className={styles.first}>
              {list.slice(0, 3).map((item, index) => (
                <div key={index} style={{ flex: index === 0 ? 1 : 2, padding: '20px' }}>
                  <DroppableComponent index={index} moveCard={moveCard}>
                    <DraggableComponent id={String(index)} index={index}>
                      {item.component}
                    </DraggableComponent>
                  </DroppableComponent>
                </div>
              ))}
            </div>

            <div className={styles.second}>
              {list.slice(3, 5).map((item, index) => (
                <div key={index} style={{ flex: 2, padding: '20px' }}>
                  <DroppableComponent index={index + 3} moveCard={moveCard}>
                    <DraggableComponent id={String(index + 3)} index={index + 3}>
                      {item.component}
                    </DraggableComponent>
                  </DroppableComponent>
                </div>
              ))}
            </div>

            <div className={styles.third}>
              {list.slice(5, 8).map((item, index) => (
                <div key={index} style={{ flex: 2, padding: '20px' }}>
                  <DroppableComponent index={index + 5} moveCard={moveCard}>
                    <DraggableComponent id={String(index + 5)} index={index + 5}>
                      {item.component}
                    </DraggableComponent>
                  </DroppableComponent>
                </div>
              ))}
            </div>
          </>
        )}
        {/* {renderDnd()} */}
        {/* <DndProvider backend={HTML5Backend}>{list.map((item, i) => renderDnd(item, i))}</DndProvider> */}
      </div>
    </DndProvider>
  );
};

export default Dnd;
