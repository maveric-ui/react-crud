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

  renderTableHeadCells = () => {
    const rowHead = [
      {id: "id", label: "id"},
      {id: "name", label: "name"},
      {id: "position", label: "position"},
      {id: "dateOfBirth", label: "date of birth"},
      {id: "hireDate", label: "hire date"},
      {id: "address", label: "address"},
      {id: "city", label: "city"},
      {id: "country", label: "country"},
    ];

    return (
        <TableRow className="table__head__row">
          {rowHead.map((row) => {
            return (
                <TableCell key={row.id} className="table__head__cell">
                  <span className="table__head__cell-sort">
                    {row.label}
                    <span className="i-sort"/>
                  </span>
                </TableCell>

            )
          })}
        </TableRow>
    )
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
              <Button variant="fab" aria-label="edit" className="btn btn-edit"
                      onClick={((e) => this.onEdit(e, profile))}
              >
                <Icon className="i-edit">edit_icon</Icon>
              </Button>
            </TableCell>
            <TableCell className="table__body__cell cell-control">
              <Button variant="fab" aria-label="delete" className="btn btn-delete"
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
              {this.renderTableHeadCells()}
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