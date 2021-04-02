import React, { useState } from "react";
import { Modal } from "antd";
import {SettingOutlined } from '@ant-design/icons';
import update from 'immutability-helper';
import DragSortingTable from "../DragSortingTable/DragSortingTable";
import "antd/dist/antd.css";

class DragSortingTableModalBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.dataList||[]
    };
  }

  moveRow(dragIndex, hoverIndex) {
    let { data } = this.state;
    const dragRow = data[dragIndex]; 
    let newData = update(data, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragRow],
      ],
    });
    
    this.setState({
      data: newData
    });
  }

  render() {
    let { isVisible,showModal,handleOK,handleCancel } = this.props;
    let { data } = this.state;

    return (
      <React.Fragment>
        <SettingOutlined onClick={showModal} />
        <Modal
          visible={isVisible}
          title="自定义表头字段"
          onOk={() => handleOK(data)}
          bodyStyle={{"backgroundColor":"#f6f6f6"}}
          onCancel={handleCancel}
          cancelText="关闭"
          okText="保存修改"
        >
          <DragSortingTable 
            data={data}
            moveRow={this.moveRow.bind(this)}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default DragSortingTableModalBtn;
