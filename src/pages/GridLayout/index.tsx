import RGL, { Responsive, WidthProvider } from 'react-grid-layout';
// import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import Layout from '@/Layouts/BasicLayout';
import { useMemo } from 'react';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);
// const ResponsiveGridLayout = WidthProvider(Responsive);

const MyGridLayout = () => {
  // const ResponsiveReactGridLayout = useMemo(() => WidthProvider(Responsive), []);

  const defaultGridProps = {
    isDraggable: true,
    isResizable: true,
    items: 20,
    rowHeight: 30,
    width: 1200,
    onLayoutChange: (layout: any) => {},
    cols: 24,
    style: { background: 'green' },
  };

  const onLayoutChange = (layout) => {
    defaultGridProps.onLayoutChange(layout);
  };

  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: 'a', x: 0, y: 0, w: 6, h: 2, minW: 6, minH: 2 },
    { i: 'b', x: 6, y: 0, w: 12, h: 2 },
    { i: 'c', x: 18, y: 0, w: 6, h: 2 },
    { i: 'd', x: 0, y: 2, w: 6, h: 2 },
    { i: 'e', x: 6, y: 2, w: 12, h: 2 },
    { i: 'f', x: 18, y: 2, w: 6, h: 2 },
  ];
  return (
    <ReactGridLayout
      {...defaultGridProps}
      layout={layout}
      onLayoutChange={onLayoutChange}
      //   breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      //   cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="a" style={{ background: 'red' }}>
        a
      </div>
      <div key="b" style={{ background: 'blue' }}>
        b
      </div>
      <div key="c" style={{ background: 'yellow' }}>
        c
      </div>
      <div key="d" style={{ background: 'pink' }}>
        d
      </div>
      <div key="e" style={{ background: 'purple' }}>
        e
      </div>
      <div key="f" style={{ background: 'orange' }}>
        f
      </div>
    </ReactGridLayout>
  );
};

export default MyGridLayout;
