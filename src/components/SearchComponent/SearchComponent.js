import React, { Component } from 'react';
import './SearchComponent.less';
import { Input, Icon } from '@material-ui/core';

class SearchComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false,
    };
  }

  onFocus = () => {
    this.setState({focused: true})
  };

  onBlur = () => {
    this.setState({ focused: false })
  };

  onChange = e => {
    const {searchEmployee} = this.props;
    searchEmployee(e.target.value);
  };


  render() {
    const {focused} = this.state;
    const searchIcon = `i-search-${focused ? "primary" : "grey"}`;
    return (
        <Input
            id="search"
            className="search"
            type="input"
            placeholder="Search"
            startAdornment={
              <Icon className={searchIcon}>search</Icon>
            }
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
        />
    )
  }
}

export default SearchComponent