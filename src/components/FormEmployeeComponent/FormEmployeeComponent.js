import React, { Component } from 'react';
import './FormEmployeeComponent.less';
import { Button, Icon, MenuItem, Input, Select, FormControl, FormHelperText } from '@material-ui/core';

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
      country: !employeeLength ? "" : props.employee.country,

      errorStates: {
        name: null,
        dateOfBirth: null,
        hireDate: null,
        country: null,
      },
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
          <Button type="submit" variant="outlined" className="btn btn-save"
                  onClick={this.onSave}>
            <Icon className="i-check">check</Icon>
            Save
          </Button>
      )
    } else {
      return (
          <Button type="submit" variant="outlined" className="btn btn-update"
                  onClick={this.onUpdate}>
            <Icon className="i-update">edit_icon</Icon>
            Update
          </Button>
      )
    }
  };

  handleValueChange = name => event => {
    const value = event.target.value;
    const {errorStates, dateOfBirth} = this.state;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    switch (name) {
      case "name":
        if (value.length === 0) {
          errorStates.name = 'This field is required';
        } else if (value.length <= 2) {
          errorStates.name = 'This field must have more then 2 letters'
        } else {
          errorStates.name = null;
        }
        break;
      case "dateOfBirth":
        const getDateOfBirth = new Date(value);
        const dateOfBirthYear = getDateOfBirth.getFullYear();
        const dateOfBirthMonth = getDateOfBirth.getMonth() + 1;
        const dateOfBirthDay = getDateOfBirth.getDate();

        if (value.length === 0) {
          errorStates.dateOfBirth = 'This field is required';
        } else if (dateOfBirthYear === currentYear
            && dateOfBirthMonth === currentMonth
            && dateOfBirthDay === currentDay) {
          errorStates.dateOfBirth = 'The Date of Birth can\'t be today';
        } else if (dateOfBirthYear > currentYear
            || dateOfBirthMonth > currentMonth
            || dateOfBirthDay > currentDay) {
          errorStates.dateOfBirth = 'The Date of Birth can\'t be more than current date';
        } else {
          errorStates.dateOfBirth = null;
        }
        break;
      case "hireDate":
        const getHireDate = new Date(value);
        const hireDateYear = getHireDate.getFullYear();
        const hireDateMonth = getHireDate.getMonth() + 1;
        const hireDateDay = getHireDate.getDate();

        const dateOfBirthState = new Date(dateOfBirth);
        const dateOfBirthStateYear = dateOfBirthState.getFullYear();
        const dateOfBirthStateMonth = dateOfBirthState.getMonth() + 1;
        const dateOfBirthStateDay = dateOfBirthState.getDate();

        if (value.length === 0) {
          errorStates.hireDate = 'This field is required';
        } else if (hireDateYear === dateOfBirthStateYear
            && hireDateMonth === dateOfBirthStateMonth
            && hireDateDay === dateOfBirthStateDay) {
          errorStates.hireDate = 'The Hire Date  can\'t be equal to Date of Birth';
        } else if (hireDateYear < dateOfBirthStateYear
            || hireDateMonth < dateOfBirthStateMonth
            || hireDateDay < dateOfBirthStateDay) {
          errorStates.hireDate = 'The Hire Date  can\'t be less than Date of Birth';
        } else if (hireDateYear > currentYear
            || hireDateMonth > currentMonth
            || hireDateDay > currentDay) {
          errorStates.hireDate = 'The Hire Date  can\'t be more than current date';
        } else {
          errorStates.hireDate = null;
        }
        break;
      case "country":
        if (value.length === 0) {
          errorStates.country = 'This field is required';
        } else {
          errorStates.country = null;
        }
        break;
      default:
        break;
    }

    this.setState({errorStates, [name]: value});
  };

  validationForm = () => {
    const {errorStates, name, dateOfBirth, hireDate, country} = this.state;
    let valid = {};

    Object.values(errorStates).map(val => val !== null && (valid = false));

    if (name === "" || dateOfBirth === "" || hireDate === "" || country === "") {
      valid = false;
    }

    return valid;
  };

  onSave = (e) => {
    e.preventDefault();
    const {name, position, dateOfBirth, hireDate, address, city, country} = this.state;
    const newEmployee = {name, position, dateOfBirth, hireDate, address, city, country};

    if (this.validationForm()) {
      // this.props.handleSave(newEmployee);
      console.log(newEmployee)
    } else {
      console.error("Faild");
    }
  };

  onUpdate = (e) => {
    e.preventDefault();
    const {name, position, dateOfBirth, hireDate, address, city, country} = this.state;
    const updatedEmployee = {name, position, dateOfBirth, hireDate, address, city, country};

    if (this.validationForm()) {
      // this.props.handleUpdate(updatedEmployee);
      console.log(updatedEmployee);
    } else {
      console.error("Faild");
    }
  };

  onClose = () => {
    this.props.handleClose();
  };

  render() {
    const {name, position, dateOfBirth, hireDate, address, city, country, errorStates} = this.state;

    return (
        <form id="form-employee" className="form-container" noValidate autoComplete="off">
          <FormControl error={errorStates.name !== null}>
            <Input
                required
                placeholder="Name"
                type="input"
                className="form__field"
                value={name}
                onChange={this.handleValueChange('name')}
            />
            {errorStates.name === null ? "" : <FormHelperText error>{errorStates.name}</FormHelperText>}
          </FormControl>
          <Input
              placeholder="Position"
              className="form__field"
              value={position}
              onChange={this.handleValueChange('position')}
          />
          <FormControl error={errorStates.dateOfBirth !== null}>
            <Input
                required
                type="date"
                className="form__field"
                value={dateOfBirth}
                onChange={this.handleValueChange('dateOfBirth')}
            />
            {errorStates.dateOfBirth === null ? "" : <FormHelperText error>{errorStates.dateOfBirth}</FormHelperText>}
          </FormControl>
          <FormControl error={errorStates.hireDate !== null}>
            <Input
                required
                type="date"
                className="form__field"
                value={hireDate}
                onChange={this.handleValueChange('hireDate')}
            />
            {errorStates.hireDate === null ? "" : <FormHelperText error>{errorStates.hireDate}</FormHelperText>}
          </FormControl>
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


          <FormControl error={errorStates.country !== null}>
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
            {errorStates.country === null ? "" : <FormHelperText error>{errorStates.country}</FormHelperText>}
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
