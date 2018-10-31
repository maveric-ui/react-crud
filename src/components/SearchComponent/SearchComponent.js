import React, { Component } from 'react';
import './SearchComponent.less';
import { Input, Icon } from '@material-ui/core';

class SearchComponent extends Component {
  state = {
    focused: false,
  };

  onFocus = () => {
    this.setState({focused: true})
  };

  onBlur = () => {
    this.setState({ focused: false })
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
        />
    )
  }
}

export default SearchComponent