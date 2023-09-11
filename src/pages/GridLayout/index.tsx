import GridLayout from 'react-grid-layout';

const MyGridLayout = () => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <GridLayout style={{ background: 'green' }} layout={layout} cols={12} rowHeight={30} width={600}>
      <div key="a" style={{ background: 'red' }}>
        a
      </div>
      <div key="b" style={{ background: 'blue' }}>
        b
      </div>
      <div key="c" style={{ background: 'yellow' }}>
        c
      </div>
    </GridLayout>
  );
};

export default MyGridLayout;
