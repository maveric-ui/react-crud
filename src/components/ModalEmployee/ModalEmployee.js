import React, { Component } from 'react';
import './ModalEmployee.less';
import { Modal } from '@material-ui/core';
import FormEmployeeComponent from '../FormEmployeeComponent/FormEmployeeComponent'
import connect from 'react-redux/es/connect/connect';
import { addEmployee } from '../../actions/ProfilesAction';

class ModalEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.props.openModal(this.handleOpen);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false})
  };

  handleSave = (newEmployee) => {
    this.props.addEmployee(newEmployee);
    this.handleClose();
  };

  handleUpdate = (updatedEmployee) => {
    this.props.handleUpdateEmployeeModal(updatedEmployee);
    this.handleClose();
  };

  render() {
    const {employee,addNotification} = this.props;
    return (
        <div>
          <Modal
              className="root-modal"
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
          >
            <div className="modal-container">
              <h1 className="modal-container__title">
                {!Object.keys(employee).length ? "Adding new employee" : "Editing employee"}
              </h1>
              <FormEmployeeComponent
                  employee={employee}
                  handleClose={this.handleClose}
                  handleSave={this.handleSave}
                  handleUpdate={this.handleUpdate}
                  addNotification={addNotification}
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