import React, { useCallback, useEffect, useState } from 'react';
import DraggableComponent from './DraggableComponent';
import DroppableComponent from './DroppableComponent';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, useDragDropManager } from 'react-dnd';
import update from 'immutability-helper';
import { DndComponent } from './DndComponent';

interface ChartItem {
  id: string;
  component: JSX.Element;
}

const Dnd = () => {
  const [list, setList] = useState<ChartItem[]>([
    { id: '0', component: <div style={{ width: 200, height: 200, display: 'inline-block' }}>Drag me1!</div> },
    { id: '1', component: <div style={{ width: 200, height: 200, display: 'inline-block' }}>Drag me2!</div> },
    { id: '2', component: <div style={{ width: 200, height: 200, display: 'inline-block' }}>Drag me3!</div> },
    { id: '3', component: <div style={{ width: 200, height: 200, display: 'inline-block' }}>Drag me4!</div> },
    { id: '4', component: <div style={{ width: 200, height: 200, display: 'inline-block' }}>Drag me5!</div> },
  ]);
  const handleDrop = (item) => {
    console.log('item: ', item);
    // 处理放置操作
  };

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setList((prevCards: ChartItem[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as ChartItem],
        ],
      }));
  }, []);

  const renderDnd = useCallback((ele: ChartItem, index) => {
    return (
      <DndComponent
        key={ele.id}
        index={index}
        id={ele.id}
        moveCard={moveCard}
      >
        {ele.component}
      </DndComponent>
      // <DroppableComponent onDrop={handleDrop} index={index} moveCard={moveCard}>
      //   <DraggableComponent id={ele.id}>
      //     {ele.component}
      //   </DraggableComponent>
      // </DroppableComponent>
    );
  }, []);


  return (
    <div style={{ display: 'flex' }}>
      <DndProvider backend={HTML5Backend}>
        {list.map((item, i) => renderDnd(item, i))}
        {/* <DroppableComponent onDrop={handleDrop} index={'1'}>
          <DraggableComponent id="1">
            <div style={{ width: 200, height: 200 }}>Drag me1!</div>
            <div style={{ width: 200, height: 200 }}>Drag me2!</div>
            <div style={{ width: 200, height: 200 }}>Drag me3!</div>
          </DraggableComponent>
        </DroppableComponent>

        <DroppableComponent onDrop={handleDrop} index={'2'}>
          <DraggableComponent id="2">
            <div style={{ width: 200, height: 200 }}>Drag me4!</div>
          </DraggableComponent>
        </DroppableComponent>

        <DroppableComponent onDrop={handleDrop} index={'3'}>
          <DraggableComponent id="3">
            <div style={{ width: 200, height: 200 }}>Drag me5!</div>
          </DraggableComponent>
        </DroppableComponent> */}
      </DndProvider>
    </div>
  );
};

export default Dnd;
