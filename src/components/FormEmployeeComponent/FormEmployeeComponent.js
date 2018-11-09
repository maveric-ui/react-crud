import React, { Component } from 'react';
import './FormEmployeeComponent.less';
import { Button, Icon, MenuItem, Input, Select, FormControl } from '@material-ui/core';

class FormEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.employee.name,
      position: props.employee.position,
      dateOfBirth: props.employee.dateOfBirth,
      hireDate: props.employee.hireDate,
      address: props.employee.address,
      city: props.employee ? "" : props.employee.city,
      country: props.employee ? "" : props.employee.country,
    };
  }



  //   componentDidMount() {
  //   const {employee} = this.props;
  //   this.setState({
  //     name: employee.name,
  //     position: employee.position,
  //     dateOfBirth: employee.dateOfBirth,
  //     hireDate: employee.hireDate,
  //     address: employee.address,
  //     city: "" ,
  //     country: ""
  //   })
  // }

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

  onSave = (e) => {
    e.preventDefault();
    const {
      name,
      position,
      dateOfBirth,
      hireDate,
      address,
      city,
      country,
    } = this.state;

    const newEmployee = {
      id: this.props.generateEmployeeID,
      name,
      position,
      dateOfBirth,
      hireDate,
      address,
      city,
      country
    };

    this.props.handleSave(newEmployee);

  };

  onUpdate = (e) => {
    e.preventDefault();
    const {
      name,
      position,
      dateOfBirth,
      hireDate,
      address,
      city,
      country,
    } = this.state;

    const updatedEmployee = {
      name,
      position,
      dateOfBirth,
      hireDate,
      address,
      city,
      country,
    };

    this.props.handleUpdate(updatedEmployee);
  };

  onClose = () => {
    this.props.handleClose(false);
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
    } = this.state;

    const {isEdit} = this.props;

    return (
        <form id="form-employee" className="form-container" noValidate autoComplete="off">
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
              <MenuItem value="" disabled={!isEdit}>
                City
              </MenuItem>
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
              <MenuItem value="" disabled={!isEdit}>
                Country
              </MenuItem>
              {this.renderMenuItemCountry()}
            </Select>
          </FormControl>

          <div className="form__controls">
            {!isEdit ?
                (
                    <Button type="submit" variant="outlined" className="btn btn-save" onClick={this.onSave}>
                      <Icon className="i-check">check</Icon>
                      Save
                    </Button>
                ) :
                (
                    <Button type="submit" variant="outlined" className="btn btn-update" onClick={this.onUpdate}>
                      <Icon className="i-update">edit_icon</Icon>
                      Update
                    </Button>
                )
            }

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
