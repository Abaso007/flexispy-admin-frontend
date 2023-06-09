/* eslint-disable max-len */
import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

function Results({ className, customers, ...rest }) {
  const classes = useStyles();

  if(customers.length ===0)
    return null;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    > 
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Latitude
                </TableCell>
                <TableCell>
                  Longitude
                </TableCell>
                <TableCell>
                  Accuracy(m)
                </TableCell>
                <TableCell>
                  Date & Time
                </TableCell>
                <TableCell  align="right">
                  Map view
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {customers.map((customer) => {
                return (
                  <TableRow
                    hover
                    key={customer.id}
                  >
                    <TableCell>
                      {customer.latitude}
                    </TableCell>
                    <TableCell>
                      {customer.longitude}
                    </TableCell>
                    <TableCell>
                      {customer.accuracy}
                    </TableCell>
                    <TableCell>
                      {customer.updatedAt}
                    </TableCell>
                    <TableCell align="right">
                      <Button>
                      <img width="40px" height="40px" src='/static/third_party/image/LocationMap.png' alt='map'/>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array
};

export default Results;
