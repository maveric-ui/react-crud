import React, { Component } from 'react';
import './PageContainer.less';
import TableComponent from '../../components/TableComponent/TableComponent';
import ModalAdd from '../../components/ModalAdd/ModalAdd';
import Loader from 'react-loader-spinner'

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
    const {profiles, isLoading} = this.props;
    return (
        <div className="page-container">
          <ModalAdd/>
          {isLoading ? this.renderLoadingTemplate() :
              <TableComponent profiles={profiles}/>
          }

        </div>
    )
  }
}


export default PageContainer