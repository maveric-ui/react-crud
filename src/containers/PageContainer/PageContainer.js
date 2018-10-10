import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PageContainer.less';
import TableComponent from '../../components/TableComponent/TableComponent';
import { getProfiles } from '../../actions/ProfileAction';

class PageContainer extends Component {
  render () {
    const { profiles, getProfiles } = this.props;
    return (
        <div className="page-container">
          <TableComponent
            profile={profiles}
            handleProfile={getProfiles}
          />
        </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    profiles: store.profiles,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfiles: () => dispatch(getProfiles())
  }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (PageContainer)