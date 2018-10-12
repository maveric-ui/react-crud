import React, { Component } from 'react';
import './ModalAdd.less';
import { Modal, Button, Icon } from '@material-ui/core';
import FormAddComponent from '../FormAddComponent/FormAddComponent'

class ModalAdd extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
        <div>
          <div className="modal-control">
            <p className="modal-control__title">
              Employees
            </p>
            <Button variant="outlined" className="btn btn-add" onClick={this.handleOpen}>
              <Icon className="i-add">add</Icon>
              Add
            </Button>
          </div>
          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
          >
            <div className="modal-container">
              <h1 className="modal-container__title">
                Adding new employee
              </h1>
              <FormAddComponent />
            </div>
          </Modal>
        </div>
    )
  }
}

export default ModalAdd;