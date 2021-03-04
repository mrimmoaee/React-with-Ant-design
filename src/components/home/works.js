import React, { useState } from "react";
import { Modal, Button } from "antd";

class AppWorks extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div id='works' className='block worksBlock'>
        <div className='container-fluid'>
          <div className='titleHolder'>
            <h2>How it works</h2>
            <p>It provides easier and customizable interface</p>
          </div>
          <div className='contentHolder'>
            <Button type='primary' onClick={this.showModal}>
              <i className='fas fa-play'></i>
            </Button>
          </div>

          <Modal
            title='How to design woocommerce theme.'
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <iframe
              title='Woocommerce Tutorial'
              width='100%'
              height='350'
              src='https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU'
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;
