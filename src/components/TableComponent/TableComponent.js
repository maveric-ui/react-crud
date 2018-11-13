import React, { Component } from 'react';
import './TableComponent.less';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Icon } from '@material-ui/core';

class TableComponent extends Component {

  onEdit = (e, profile) => {
    this.props.handleEditEmployee(profile);
  };

  onDelete = (e, employee) => {
    this.props.deleteEmployee(employee.id);
  };

  renderTableBodyCells = () => {
    const {profiles} = this.props;
    return profiles.map((profile) => {
      const dateOption = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };
      const dateOfBirth = new Date(profile.dateOfBirth).toLocaleDateString('ru', dateOption);
      const hireDate = new Date(profile.hireDate).toLocaleDateString('ru', dateOption);
      return (
          <TableRow key={profile.id} className="table__body__row">
            <TableCell className="table__body__cell">{profile.id}</TableCell>
            <TableCell className="table__body__cell">{profile.name}</TableCell>
            <TableCell className="table__body__cell">{profile.position}</TableCell>
            <TableCell className="table__body__cell">{dateOfBirth}</TableCell>
            <TableCell className="table__body__cell">{hireDate}</TableCell>
            <TableCell className="table__body__cell cell-address">{profile.address}</TableCell>
            <TableCell className="table__body__cell">{profile.city}</TableCell>
            <TableCell className="table__body__cell">{profile.country}</TableCell>
            <TableCell className="table__body__cell cell-control">
              <Button variant="fab" aria-label="Edit" className="btn btn-edit"
                      onClick={((e) => this.onEdit(e, profile))}
              >
                <Icon className="i-edit">edit_icon</Icon>
              </Button>
            </TableCell>
            <TableCell className="table__body__cell cell-control">
              <Button variant="fab" aria-label="Delete" className="btn btn-delete"
                      onClick={((e) => this.onDelete(e, profile))}
              >
                <Icon className="i-delete">delete_icon</Icon>
              </Button>
            </TableCell>
          </TableRow>
      )
    });
  };

  render() {
    return (
        <div className="root-table">
          <Table className="table">
            <TableHead className="table__head">
              <TableRow className="table__head__row">
                <TableCell className="table__head__cell">id</TableCell>
                <TableCell className="table__head__cell">name</TableCell>
                <TableCell className="table__head__cell">position</TableCell>
                <TableCell className="table__head__cell">date of birth</TableCell>
                <TableCell className="table__head__cell">hire date</TableCell>
                <TableCell className="table__head__cell">address</TableCell>
                <TableCell className="table__head__cell">city</TableCell>
                <TableCell className="table__head__cell">country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table__body">
              {this.renderTableBodyCells()}
            </TableBody>
          </Table>
        </div>
    )
  }
}

export default TableComponent