import React from "react";
import ReactDOM from 'react-dom';
import DragSortingTableModalBtn from "./ModalBtn/DragSortingTableModalBtn";

const tableKeys = [
  { key: 'first', text: '第一项' },
  { key: 'second', text: '第二项' },
  { key: 'third', text: '第三项' },
  { key: 'forth', text: '第四项' },
  { key: 'fifth', text: '第五项' },
  { key: 'sixth', text: '第六项' },
  { key: 'seventh', text: '第七项' },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible_setting: false,
      tableKeys: tableKeys
    };
  }

  showModal() {
    this.setState({
      isVisible_setting: true
    });
  }

  handleOK(tableKeys) {
    this.setState({
      isVisible_setting: false,
      tableKeys
    });
  }

  handleCancel() {
    this.setState({
      isVisible_setting: false
    });
  }

  render() {
    let { isVisible_setting, tableKeys } = this.state;

    return (<div style={{padding: '6px',border: 'solid 1px','borderRadius': '10px',height: '30px',width: '30px'}}>
      <DragSortingTableModalBtn
        isVisible={isVisible_setting}
        showModal={this.showModal.bind(this)}
        handleOK={this.handleOK.bind(this)}
        handleCancel={this.handleCancel.bind(this)}
        dataList={tableKeys}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));