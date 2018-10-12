import React, { Component } from 'react';
import './TableComponent.less';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

class TableComponent extends Component {

  renderTableBodyCells = () => {
    const {profiles} = this.props;
    return profiles.map((profile) => {
      const dateOption = {
        day: "numeric",
        month: "numeric",
        year:"numeric",
      };
      const dateOfBirth = new Date(profile.dateOfBirth).toLocaleDateString('ru', dateOption);
      const hireDate = new Date(profile.hireDate).toLocaleDateString('ru', dateOption);
      return (
          <TableRow key={profile.id} className="table__body__row">
            <TableCell className="table__body__cell cell__id">{profile.id}</TableCell>
            <TableCell className="table__body__cell">{profile.name}</TableCell>
            <TableCell className="table__body__cell">{profile.position}</TableCell>
            <TableCell className="table__body__cell">{dateOfBirth}</TableCell>
            <TableCell className="table__body__cell">{hireDate}</TableCell>
            <TableCell className="table__body__cell cell__address">{profile.address}</TableCell>
            <TableCell className="table__body__cell">{profile.city}</TableCell>
            <TableCell className="table__body__cell">{profile.country}</TableCell>
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