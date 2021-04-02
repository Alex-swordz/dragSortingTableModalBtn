import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
const ItemType = 'DragableBodyRow';

const style = {
  padding: '0.5rem 1rem',
  borderBottom: '1px solid #e7ecf1',
  backgroundColor: '#fff',
  cursor: 'move',
};
const dropDownStyle = {
  borderBottom: '2px dashed #1890ff'
};
const dropUpStyle = {
  borderTop: '2px dashed #1890ff'
}
const DragableBodyRow = ({ id, text, index, moveRow }) => {
  const ref = useRef();
  const [{ isOver, dropStyle }, drop] = useDrop({
    //定义拖拽的类型
    accept: ItemType,    
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      // 如果拖拽目标和放置目标相同的话，停止执行
      if (dragIndex === index) {
        return {};
      }

      return {
        isOver: monitor.isOver(),
        dropStyle: dragIndex < index ? dropDownStyle : dropUpStyle,
      };
    },
    drop: item => {
      const dragIndex = item.index;
      const hoverIndex = index;
      moveRow(dragIndex, hoverIndex);
    }
  },
  [index]
  );
  let _dropStyle = isOver ? dropStyle : {};

  const [{ opacity }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  },
  [index]
  );
  drag(drop(ref));

  return (
    <div 
      ref={ref} 
      style={{ ...style, opacity, ..._dropStyle }}
    >
      <div className='row-item' dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  )
}
export default DragableBodyRow;