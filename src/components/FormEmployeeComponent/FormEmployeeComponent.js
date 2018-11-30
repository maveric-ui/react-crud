import React, { Component } from 'react';
import './FormEmployeeComponent.less';
import { Button, Icon, MenuItem, Input, Select, FormControl, FormHelperText } from '@material-ui/core';
import { validateFormOnChanges, validateFieldOnSubmit } from '../../utils/ValidationEmployeeForm';

let employeeLength;

class FormEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    employeeLength = Object.keys(props.employee).length;
    this.state = {
      formData: {
        name: !employeeLength ? "" : props.employee.name,
        position: !employeeLength ? "" : props.employee.position,
        dateOfBirth: !employeeLength ? "" : props.employee.dateOfBirth,
        hireDate: !employeeLength ? "" : props.employee.hireDate,
        address: !employeeLength ? "" : props.employee.address,
        city: !employeeLength ? "" : props.employee.city,
        country: !employeeLength ? "" : props.employee.country,
      },

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

  handleValueChanges = name => event => {
    const value = event.target.value;
    const {errorStates, formData} = this.state;
    validateFormOnChanges(name, value, errorStates, formData.dateOfBirth);
    this.setState({errorStates, formData: {...this.state.formData, [name]: value}});
  };

  validationForm = () => {
    const {errorStates, formData} = this.state;
    let valid = true;

    validateFieldOnSubmit(errorStates, formData);
    this.setState({errorStates});
    Object.values(errorStates).map(val => val !== null && (valid = false));

    return valid;
  };

  onSave = (e) => {
    e.preventDefault();
    const {formData} = this.state;
    const newEmployee = {...formData};

    if (!this.validationForm()) {
     return;
    }

    this.props.handleSave(newEmployee);
    this.props.addNotification({
      date: new Date(),
      message: "New employee was added"
    })
  };

  onUpdate = (e) => {
    e.preventDefault();
    const {formData} = this.state;
    const updatedEmployee = {...formData};

    if (!this.validationForm()) {
      return;
    }

    this.props.handleUpdate(updatedEmployee);
    this.props.addNotification({
      date: new Date(),
      message: "Employee was edited"
    })
  };

  onClose = () => {
    this.props.handleClose();
  };

  render() {
    const {formData, errorStates} = this.state;

    return (
        <form id="form-employee" className="form-container" noValidate autoComplete="off">
          <FormControl error={errorStates.name != null}>
            <Input
                required
                placeholder="Name"
                type="input"
                className="form__field"
                value={formData.name}
                onChange={this.handleValueChanges('name')}
            />
            {errorStates.name === null ? "" : <FormHelperText error>{errorStates.name}</FormHelperText>}
          </FormControl>
          <Input
              placeholder="Position"
              className="form__field"
              value={formData.position}
              onChange={this.handleValueChanges('position')}
          />
          <FormControl error={errorStates.dateOfBirth != null}>
            <Input
                required
                type="date"
                className="form__field"
                value={formData.dateOfBirth}
                onChange={this.handleValueChanges('dateOfBirth')}
            />
            {errorStates.dateOfBirth === null ? "" : <FormHelperText error>{errorStates.dateOfBirth}</FormHelperText>}
          </FormControl>
          <FormControl error={errorStates.hireDate != null}>
            <Input
                required
                type="date"
                className="form__field"
                value={formData.hireDate}
                onChange={this.handleValueChanges('hireDate')}
            />
            {errorStates.hireDate === null ? "" : <FormHelperText error>{errorStates.hireDate}</FormHelperText>}
          </FormControl>
          <Input
              type="input"
              placeholder="Address"
              className="form__field"
              value={formData.address}
              onChange={this.handleValueChanges('address')}
          />
          <FormControl>
            <Select
                name="city"
                displayEmpty
                className="form__field"
                value={formData.city}
                onChange={this.handleValueChanges('city')}
                renderValue={value => {
                  if (!value) {
                    return "City";
                  }
                  return formData.city
                }
                }
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
              {this.renderMenuItemCity()}
            </Select>
          </FormControl>


          <FormControl error={errorStates.country != null}>
            <Select
                required
                displayEmpty
                name="country"
                className="form__field"
                value={formData.country}
                onChange={this.handleValueChanges('country')}
                renderValue={value => {
                  if (!value) {
                    return "Country";
                  }
                  return formData.country
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
