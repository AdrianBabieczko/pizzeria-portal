import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { id: '1', table: '1', orderInfo: 'pizza (1), 2 x wather' },
  { id: '2', table: '1', orderInfo: 'pizza (5)' },
  { id: '3', table: '2', orderInfo: 'pizza (3), nachos' },
  { id: '4', table: '3', orderInfo: 'pizza (11), beer' },
  { id: '5', table: '4', orderInfo: 'pizza (7), milk' },
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Order info</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.orderInfo}
            </TableCell>
            <TableCell>
              <Button>Done</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
