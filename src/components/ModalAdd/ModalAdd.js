import React, { Component } from 'react';
import './ModalAdd.less';
import { Modal, Button, Icon } from '@material-ui/core';
import FormAddComponent from '../FormAddComponent/FormAddComponent'
import connect from 'react-redux/es/connect/connect';
import { addEmployee } from '../../actions/ProfilesAction';

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

  handleSave = newEmployee => {
    this.props.addEmployee(newEmployee);
    this.setState(({open: false}))
  };

  generateEmployeeID = () => {
    const { profiles } = this.props;
    return profiles.map((item, index, arr) => {
      const lastIndex = arr.length - 1;
      return lastIndex + 1;
    });
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
              <FormAddComponent
                  onClose={this.handleClose}
                  handleSave={this.handleSave}
                  generateEmployeeID={this.generateEmployeeID}
              />
            </div>
          </Modal>
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    newEmployee: store.profilesReducer.employee,
    profiles: store.profilesReducer.profiles
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addEmployee: newEmployee => dispatch(addEmployee(newEmployee)),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ModalAdd);