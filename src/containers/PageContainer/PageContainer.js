import React, { Component } from 'react';
import './PageContainer.less';
import TableComponent from '../../components/TableComponent/TableComponent';
import ModalAdd from '../../components/ModalAdd/ModalAdd';
import Loader from 'react-loader-spinner'
import connect from 'react-redux/es/connect/connect';
import { deleteEmployee } from '../../actions/ProfilesAction';

class PageContainer extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

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
    return (
        <div className="page-container">
          {isLoading ? this.renderLoadingTemplate() :
              (
                  <React.Fragment>
                    <ModalAdd/>
                    <TableComponent
                        profiles={profiles}
                        deleteEmployee={deleteEmployee}
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
    deleteEmployee: employeeID => dispatch(deleteEmployee(employeeID))
  }
};

export default connect(
    null,
    mapDispatchToProps,
)(PageContainer)