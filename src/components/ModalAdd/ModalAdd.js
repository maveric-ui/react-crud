import React, { Component } from 'react';
import './ModalAdd.less';
import { Modal, Button, Icon } from '@material-ui/core';
import FormAddComponent from '../FormAddComponent/FormAddComponent'
import connect from 'react-redux/es/connect/connect';
import { addEmployee } from '../../actions/EmployeeAddAction';

class ModalAdd extends Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { addEmployee } = this.props;

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
              <FormAddComponent onClose={this.handleClose} addEmployee={this.onSubmit} />
            </div>
          </Modal>
        </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    profiles: store.employeeAddReducer.profiles,
    isLoading: store.employeeAddReducer.isLoading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: newEmployee => dispatch(addEmployee(newEmployee))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ModalAdd);