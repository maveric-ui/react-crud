import React, { Component } from 'react';
import './EmployeesContainer.less';
import TableComponent from '../../components/TableComponent/TableComponent';
import Loader from 'react-loader-spinner'
import connect from 'react-redux/es/connect/connect';
import { deleteEmployee, sortEmployee, updateEmployee } from '../../actions/ProfilesAction';
import ModalEmployee from '../../components/ModalEmployee/ModalEmployee';
import { Button, Icon } from '@material-ui/core';

class EmployeesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  handleEditEmployee = (employee) => {
    this.setState({employee: employee});
    this.onOpen();
  };

  handleUpdateEmployeeModal = (updatedEmployee) => {
    this.props.updateEmployee(this.state.employee.id, updatedEmployee);
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
    const {profiles, isLoading, deleteEmployee, sortEmployee} = this.props;
    const {employee} = this.state;

    return (
        <div className="employees-container">
          {isLoading ? this.renderLoadingTemplate() :
              (
                  <React.Fragment>
                    <ModalEmployee
                        openModal={handleOpen => this.onOpen = handleOpen}
                        profiles={profiles}
                        employee={employee}
                        handleUpdateEmployeeModal={this.handleUpdateEmployeeModal}
                    />

                    <div className="employees-header">
                      <p className="employees-header__title">
                        Employees
                      </p>
                      <Button variant="outlined" className="btn btn-add"
                              onClick={() => this.onOpen(this.setState({employee: {}}))}>
                        <Icon className="i-add">add</Icon>
                        Add
                      </Button>
                    </div>
                    <TableComponent
                        profiles={profiles}
                        deleteEmployee={deleteEmployee}
                        handleEditEmployee={this.handleEditEmployee}
                        sortEmployee={sortEmployee}
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
    sortEmployee: (order, orderBy, profiles) => dispatch(sortEmployee(order, orderBy, profiles)),
    updateEmployee: (employeeID, editedEmployee) => dispatch(updateEmployee(employeeID, editedEmployee)),
    deleteEmployee: employeeID => dispatch(deleteEmployee(employeeID))
  }
};

export default connect(
    null,
    mapDispatchToProps,
)(EmployeesContainer)