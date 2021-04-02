import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DragableBodyRow from './DragableBodyRow';

const DragSortingTable = ({ data, moveRow }) => {
  const renderRow = (item, index) => {
    return (
      <DragableBodyRow
        key={item.key}
        index={index}
        id={item.key}
        text={item.text}
        moveRow={moveRow}
      />
    )
  };
  return (
    <div className="DragSortingTable">
      <DndProvider backend={HTML5Backend}>
      { data.map((item, i) => renderRow(item, i)) }
      </DndProvider>
    </div>
  );
}

export default DragSortingTable;