import React, { Component } from 'react';
import './ModalEmployee.less';
import { Modal } from '@material-ui/core';
import FormEmployeeComponent from '../FormEmployeeComponent/FormEmployeeComponent'
import connect from 'react-redux/es/connect/connect';
import { addEmployee } from '../../actions/ProfilesAction';

class ModalEmployee extends Component {

  handleClose = (isClose) => {
    this.props.handleCloseModal(isClose);
  };

  handleSave = (newEmployee) => {
    this.props.addEmployee(newEmployee);
    this.props.handleCloseModal(false);
  };

  handleUpdate = (updatedEmployee) => {
    this.props.handleUpdateEmployeeModal(updatedEmployee);
  };

  generateEmployeeID = () => {
    const { profiles } = this.props;
    return profiles.map((item, index, arr) => {
      const lastIndex = arr.length - 1;
      return lastIndex + 1;
    });
  };

  render() {
    const {isOpen, employee, isEdit} = this.props;
    return (
        <div>
          <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={isOpen}
              onClose={this.handleClose}
          >
            <div className="modal-container">
              <h1 className="modal-container__title">
                Adding new employee
              </h1>
              <FormEmployeeComponent
                  employee={employee}
                  isEdit={isEdit}
                  handleClose={this.handleClose}
                  handleSave={this.handleSave}
                  handleUpdate={this.handleUpdate}
                  generateEmployeeID={this.generateEmployeeID}
              />
            </div>
          </Modal>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: newEmployee => dispatch(addEmployee(newEmployee)),
  }
};

export default connect(
    null,
    mapDispatchToProps
) (ModalEmployee);