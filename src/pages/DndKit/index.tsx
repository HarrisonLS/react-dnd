import React, { useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import styles from './index.module.css';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  arraySwap,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

interface ChartItem {
  id: string;
  component: JSX.Element;
}

const DndKit = () => {
  const [list, setList] = useState<any>([
    {
      id: '0',
      style: { width: '100%', height: '100%', background: 'blue', display: 'inline-block' },
      component: <div>Drag me1!</div>,
      // component: <div style={{ width: '100%', height: '100%', background: 'blue', display: 'inline-block' }}>Drag me1!</div>,
    },
    {
      id: '1',
      style: { width: '100%', height: '100%', background: 'yellow', display: 'inline-block' },
      component: <div>Drag me2!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'yellow', display: 'inline-block' }}>Drag me2!</div>
      //   ),
    },
    {
      id: '2',
      style: { width: '100%', height: '100%', background: 'red', display: 'inline-block' },
      component: <div>Drag me3!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'red', display: 'inline-block' }}>Drag me3!</div>
      //   ),
    },
    {
      id: '3',
      style: { width: '100%', height: '100%', background: 'pink', display: 'inline-block' },
      component: <div>Drag me4!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'pink', display: 'inline-block' }}>Drag me4!</div>
      //   ),
    },
    {
      id: '4',
      style: { width: '100%', height: '100%', background: 'green', display: 'inline-block' },
      component: <div>Drag me5!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'green', display: 'inline-block' }}>Drag me5!</div>
      //   ),
    },
    {
      id: '5',
      style: { width: '100%', height: '100%', background: 'purple', display: 'inline-block' },
      component: <div>Drag me6!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'purple', display: 'inline-block' }}>Drag me6!</div>
      //   ),
    },
    {
      id: '6',
      style: { width: '100%', height: '100%', background: 'yellowgreen', display: 'inline-block' },
      component: <div>Drag me7!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'yellowgreen', display: 'inline-block' }}>
      //       Drag me7!
      //     </div>
      //   ),
    },
    {
      id: '7',
      style: { width: '100%', height: '100%', background: 'black', display: 'inline-block' },
      component: <div>Drag me8!</div>,
      //   component: (
      //     <div style={{ width: '100%', height: '100%', background: 'black', display: 'inline-block' }}>Drag me8!</div>
      //   ),
    },
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  //   const reorder = (list, startIndex, endIndex) => {
  //     const result = Array.from(list);
  //     const [removed] = result.splice(startIndex, 1);
  //     result.splice(endIndex, 0, removed);
  //     return result;
  //   };
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setList((items) => {
        const oldIndex = items.map((item) => item.id).indexOf(active.id);
        const newIndex = items.map((item) => item.id).indexOf(over.id);
        console.log('oldIndex', oldIndex);
        console.log('newIndex', newIndex);
        return arraySwap(items, oldIndex, newIndex);
      });
    }
  };
  // <div className={styles.container}>

  //
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className={styles.container}>
        {list && list.length > 0 && (
          <>
            <div className={styles.first}>
              {list.slice(0, 3).map((item, index) => (
                <div style={{ flex: index === 0 ? 1 : 2, padding: '20px' }}>
                  <SortableContext items={list} strategy={verticalListSortingStrategy}>
                    <SortableItem key={item.id} id={item.id} item={item} />
                  </SortableContext>
                </div>
              ))}
            </div>

            <div className={styles.second}>
              {list.slice(3, 5).map((item, index) => (
                <div style={{ flex: 2, padding: '20px' }}>
                  <SortableContext items={list} strategy={verticalListSortingStrategy}>
                    <SortableItem key={item.id} id={item.id} item={item} />
                  </SortableContext>
                </div>
              ))}
            </div>

            <div className={styles.third}>
              {list.slice(5, 8).map((item, index) => (
                <div style={{ flex: 2, padding: '20px' }}>
                  <SortableContext items={list} strategy={verticalListSortingStrategy}>
                    <SortableItem key={item.id} id={item.id} item={item} />
                  </SortableContext>
                </div>
              ))}
            </div>
          </>
        )}
        {/* <SortableContext items={list} strategy={verticalListSortingStrategy}>
          {list && list.map((item) => <SortableItem key={item.id} id={item.id} component={item.component} />)}
        </SortableContext> */}
      </div>
    </DndContext>
  );
};

export default DndKit;
