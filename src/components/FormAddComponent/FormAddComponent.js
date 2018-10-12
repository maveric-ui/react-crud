import React, { Component } from 'react';
import './FormAddComponent.less';
import { TextField, Button, Icon, MenuItem } from '@material-ui/core';

class FormAddComponent extends Component {
  state = {
    city: 'City',
    country: 'Country'
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    const { city, country } = this.state;
    return (
        <form className="form-container" noValidate autoComplete="off">
          <TextField
              required
              id="employee-name"
              placeholder="Name"
              type="input"
              className="form__field"
          />
          <TextField
              required
              id="employee-position"
              placeholder="Position"
              className="form__field"
          />
          <TextField
              required
              id="employee-dateOfBirth"
              type="date"
              className="form__field date-piker"
          />
          <TextField
              required
              id="employee-hireDate"
              type="date"
              className="form__field date-piker"
          />
          <TextField
              id="employee-address"
              type="input"
              placeholder="Address"
              className="form__field"
          />
          <TextField
              select
              id="employee-city"
              name="city"
              className="form__field"
              value={city}
              onChange={this.handleChange('city')}
          >
            <MenuItem key={city} value={city} disabled selected>
              {city}
              </MenuItem>
            {this.renderMenuItemCity()}
          </TextField>
          <TextField
              required
              select
              id="employee-country"
              name="country"
              className="form__field"
              value={country}
              onChange={this.handleChange('country')}
          >
            <MenuItem key={country} value={country} disabled selected>
              {country}
              </MenuItem>
            {this.renderMenuItemCountry()}
          </TextField>

          <div className="form__controls">
            <Button variant="outlined" className="btn btn-save">
              <Icon className="i-check">check</Icon>
              Save
            </Button>
            <Button variant="outlined" className="btn btn-cancel">
              <Icon className="i-close">close</Icon>
              Cancel
            </Button>
          </div>
        </form>
    )
  }
}

export default FormAddComponent;
