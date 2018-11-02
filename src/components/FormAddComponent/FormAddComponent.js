import React, { Component } from 'react';
import './FormAddComponent.less';
import { Button, Icon, MenuItem, Input, Select, FormControl, FormHelperText  } from '@material-ui/core';

class FormAddComponent extends Component {
  state = {
    name: '',
    position: '',
    dateOfBirth: '',
    hireDate: '',
    address: '',
    city: '',
    country: '',
    errorsName: false,
  };

  renderMenuItemCity = () => {
    const cities = ['London', 'New York', 'Kiev'];
    return cities.map((city) => {
      return (
          <MenuItem key={city} value={city}>{city}</MenuItem>
      )
    })
  };

  renderMenuItemCountry = () => {
    const countries = ['England', 'USA', 'Ukraine'];
    return countries.map((country) => {
      return (
          <MenuItem key={country} value={country}>{country}</MenuItem>
      )
    })
  };

  handleValueChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(
        this.state.name,
        this.state.position,
        this.state.dateOfBirth,
        this.state.hireDate,
        this.state.address,
        this.state.city,
        this.state.country,
    )
  };


  render() {
    const {
      name,
      position,
      dateOfBirth,
      hireDate,
      address,
      city,
      country,
      errorsName
    } = this.state;

    return (
        <form className="form-container" noValidate autoComplete="off">
          <FormControl>
            <Input
                required
                id="employee-name"
                placeholder="Name"
                type="input"
                className="form__field"
                value={name}
                onChange={this.handleValueChange('name')}
            />
            <FormHelperText error={errorsName}>Error</FormHelperText>
          </FormControl>
          <Input
              id="employee-position"
              placeholder="Position"
              className="form__field"
              value={position}
              onChange={this.handleValueChange('position')}
          />
          <Input
              required
              id="employee-dateOfBirth"
              type="date"
              className="form__field date-piker"
              value={dateOfBirth}
              onChange={this.handleValueChange('dateOfBirth')}
          />
          <Input
              required
              id="employee-hireDate"
              type="date"
              className="form__field date-piker"
              value={hireDate}
              onChange={this.handleValueChange('hireDate')}
          />
          <Input
              id="employee-address"
              type="input"
              placeholder="Address"
              className="form__field"
              value={address}
              onChange={this.handleValueChange('address')}
          />
          <FormControl>
            <Select
                id="employee-city"
                name="city"
                className="form__field"
                displayEmpty
                value={city}
                onChange={this.handleValueChange('city')}
            >
              <MenuItem value="" disabled>City</MenuItem>
              {this.renderMenuItemCity()}
            </Select>
          </FormControl>
          <FormControl>
            <Select
                required
                id="employee-country"
                name="country"
                className="form__field"
                displayEmpty
                value={country}
                onChange={this.handleValueChange('country')}
            >
              <MenuItem value="" disabled>Country</MenuItem>
              {this.renderMenuItemCountry()}
            </Select>
          </FormControl>

          <div className="form__controls">
            <Button variant="outlined" className="btn btn-save" onClick={this.onSubmit}>
              <Icon className="i-check">check</Icon>
              Save
            </Button>
            <Button variant="outlined" className="btn btn-cancel" onClick={this.props.onClose}>
              <Icon className="i-close">close</Icon>
              Cancel
            </Button>
          </div>
        </form>
    )
  }
}

export default FormAddComponent;
