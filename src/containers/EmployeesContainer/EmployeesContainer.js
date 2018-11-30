import React, { Component } from 'react';
import './EmployeesContainer.less';
import TableComponent from '../../components/TableComponent/TableComponent';
import Loader from 'react-loader-spinner'
import connect from 'react-redux/es/connect/connect';
import { deleteEmployee, getProfiles, sortEmployee, updateEmployee } from '../../actions/ProfilesAction';
import ModalEmployee from '../../components/ModalEmployee/ModalEmployee';
import { Button, Icon } from '@material-ui/core';
import { addNotification } from '../../actions/NotificationsAction';

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
    const {profiles, getProfiles, isLoading, deleteEmployee, sortEmployee, addNotification} = this.props;
    const {employee} = this.state;

    return (
        <div className="employees-container">
          {isLoading ? this.renderLoadingTemplate() :
              (
                  <React.Fragment>
                    <ModalEmployee
                        openModal={handleOpen => this.onOpen = handleOpen}
                        employee={employee}
                        handleUpdateEmployeeModal={this.handleUpdateEmployeeModal}
                        addNotification={addNotification}
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
                        getProfiles={getProfiles}
                        deleteEmployee={deleteEmployee}
                        handleEditEmployee={this.handleEditEmployee}
                        sortEmployee={sortEmployee}
                        addNotification={addNotification}
                    />
                  </React.Fragment>
              )
          }
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    profiles: store.profilesReducer.profiles,
    isLoading: store.profilesReducer.isLoading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfiles: () => dispatch(getProfiles()),
    sortEmployee: (order, orderBy) => dispatch(sortEmployee(order, orderBy)),
    updateEmployee: (employeeID, editedEmployee) => dispatch(updateEmployee(employeeID, editedEmployee)),
    deleteEmployee: employeeID => dispatch(deleteEmployee(employeeID)),
    addNotification: newNotification => dispatch(addNotification(newNotification))
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EmployeesContainer)