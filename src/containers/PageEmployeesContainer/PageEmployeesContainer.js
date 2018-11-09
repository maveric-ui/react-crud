import React, { Component } from 'react';
import './PageEmployeesContainer.less';
import TableComponent from '../../components/TableComponent/TableComponent';
import Loader from 'react-loader-spinner'
import connect from 'react-redux/es/connect/connect';
import { deleteEmployee, updateEmployee } from '../../actions/ProfilesAction';
import ModalEmployee from '../../components/ModalEmployee/ModalEmployee';
import { Button, Icon } from '@material-ui/core';

class PageEmployeesContainer extends Component {
  state = {
    employee: {},
    isOpen: false,
    isEdit: false
  };

  componentDidMount() {
    this.props.getProfiles();
  }

  onOpenModal = () => {
    this.setState({
      employee: {},
      isOpen: true,
      isEdit: false
    })
  };

  handleEditEmployee = (employee, isOpen) => {
    this.setState({
      employee: employee,
      isOpen: isOpen,
      isEdit: isOpen
    });
  };

  handleGetEmployeeID = (employeeID) => {
    return employeeID;
  };

  handleUpdateEmployeeModal = (updatedEmployee) => {
    this.props.updateEmployee(this.state.employee.id, updatedEmployee);
  };

  handleCloseModal = (isClose) => {
    this.setState({
      isOpen: isClose
    })
  };

  renderLoadingTemplate = () => {
    return (
        <div className="loader-container">
          <Loader
              type="Bars"
              color="#59c355"
              height="100"
              width="100"
          />
          <p className="loader__title">Loading...</p>
        </div>
    )
  };

  render() {
    const {profiles, isLoading, deleteEmployee} = this.props;
    const {isOpen, employee, isEdit} = this.state;

    return (
        <div className="page-employees">
          {isLoading ? this.renderLoadingTemplate() :
              (
                  <React.Fragment>
                    <div className="employees-control">
                      <p className="employees-control__title">
                        Employees
                      </p>
                      <Button variant="outlined" className="btn btn-add"
                              onClick={this.onOpenModal}
                      >
                        <Icon className="i-add">add</Icon>
                        Add
                      </Button>
                    </div>
                    <ModalEmployee
                        profiles={profiles}
                        employee={employee}
                        isOpen={isOpen}
                        isEdit={isEdit}
                        handleCloseModal={this.handleCloseModal}
                        handleUpdateEmployeeModal={this.handleUpdateEmployeeModal}
                    />
                    <TableComponent
                        profiles={profiles}
                        handleGetEmployeeID={this.handleGetEmployeeID}
                        deleteEmployee={deleteEmployee}
                        handleEditEmployee={this.handleEditEmployee}
                    />
                  </React.Fragment>
              )
          }
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmployee: (employeeID, editedEmployee) => updateEmployee(employeeID, editedEmployee),
    deleteEmployee: employeeID => dispatch(deleteEmployee(employeeID))
  }
};

export default connect(
    null,
    mapDispatchToProps,
)(PageEmployeesContainer)