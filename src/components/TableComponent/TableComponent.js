import React, { Component } from 'react';
import './TableComponent.less';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

class TableComponent extends Component {
  render() {
    const { profile }= this.props;
    return (
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
            <TableRow className="table__body__row">
              <TableCell className="table__body__cell">{profile.id}</TableCell>
              <TableCell className="table__body__cell"></TableCell>
              <TableCell className="table__body__cell"></TableCell>
              <TableCell className="table__body__cell"></TableCell>
              <TableCell className="table__body__cell"></TableCell>
              <TableCell className="table__body__cell"></TableCell>
              <TableCell className="table__body__cell"></TableCell>
              <TableCell className="table__body__cell"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
    )
  }
}

export default TableComponent