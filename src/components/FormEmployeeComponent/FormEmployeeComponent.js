import React, { Component } from 'react';
import './FormEmployeeComponent.less';
import { Button, Icon, MenuItem, Input, Select, FormControl } from '@material-ui/core';

let employeeLength;
class FormEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    employeeLength = Object.keys(props.employee).length;
    this.state = {
      name: !employeeLength ? "" : props.employee.name,
      position: !employeeLength ? "" : props.employee.position,
      dateOfBirth: !employeeLength ? "" : props.employee.dateOfBirth,
      hireDate: !employeeLength ? "" : props.employee.hireDate,
      address: !employeeLength ? "" : props.employee.address,
      city: !employeeLength ? "" : props.employee.city,
      country: !employeeLength ? "" : props.employee.country
    };
  }

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

  renderControls = () => {
    if (!employeeLength) {
      return (
          <Button type="submit" variant="outlined" className="btn btn-save" onClick={this.onSave}>
            <Icon className="i-check">check</Icon>
            Save
          </Button>
      )
    } else {
      return (
          <Button type="submit" variant="outlined" className="btn btn-update" onClick={this.onUpdate}>
            <Icon className="i-update">edit_icon</Icon>
            Update
          </Button>
      )
    }
  };

  handleValueChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  onSave = (e) => {
    e.preventDefault();
    const {name, position, dateOfBirth, hireDate, address, city, country} = this.state;
    const newEmployee = {
      id: this.props.generateEmployeeID,
      name, position, dateOfBirth, hireDate, address, city, country
    };

    this.props.handleSave(newEmployee);
  };

  onUpdate = (e) => {
    e.preventDefault();
    const {name, position, dateOfBirth, hireDate, address, city, country} = this.state;
    const updatedEmployee = {name, position, dateOfBirth, hireDate, address, city, country,};
    this.props.handleUpdate(updatedEmployee);
  };

  onClose = () => {
    this.props.handleClose();
  };

  render() {
    const {name, position, dateOfBirth, hireDate, address, city, country} = this.state;

    return (
        <form id="form-employee" className="form-container" noValidate autoComplete="off">
          <FormControl>
            <Input
                required
                placeholder="Name"
                type="input"
                className="form__field"
                value={name}
                onChange={this.handleValueChange('name')}
            />
          </FormControl>
          <Input
              placeholder="Position"
              className="form__field"
              value={position}
              onChange={this.handleValueChange('position')}
          />
          <Input
              required
              type="date"
              className="form__field"
              value={dateOfBirth}
              onChange={this.handleValueChange('dateOfBirth')}
          />
          <Input
              required
              type="date"
              className="form__field"
              value={hireDate}
              onChange={this.handleValueChange('hireDate')}
          />
          <Input
              type="input"
              placeholder="Address"
              className="form__field"
              value={address}
              onChange={this.handleValueChange('address')}
          />
          <FormControl>
            <Select
                name="city"
                displayEmpty
                className="form__field"
                value={city}
                onChange={this.handleValueChange('city')}
                renderValue={value => {
                  if (!value) {
                    return "City";
                  }
                  return city
                }
                }
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
              {this.renderMenuItemCity()}
            </Select>
          </FormControl>
          <FormControl>
            <Select
                required
                displayEmpty
                name="country"
                className="form__field"
                value={country}
                onChange={this.handleValueChange('country')}
                renderValue={value => {
                  if (!value) {
                    return "Country";
                  }
                  return country
                }
                }
            >
              <MenuItem value="" disabled>
                Country
              </MenuItem>
              {this.renderMenuItemCountry()}
            </Select>
          </FormControl>

          <div className="form__controls">
            {this.renderControls()}
            <Button type="button" variant="outlined" className="btn btn-cancel" onClick={this.onClose}>
              <Icon className="i-close">close</Icon>
              Cancel
            </Button>
          </div>
        </form>
    )
  }
}

export default FormEmployeeComponent;
