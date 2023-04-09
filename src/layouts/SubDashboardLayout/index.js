import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import NavBar from './Navbar';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100% - 0px)',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function SubDashboardLayout({ children }) {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="My Users"
    >
      <Container maxWidth={false}>
      <NavBar
      />
      {children}
      </Container>
    </Page>
  );
}

export default SubDashboardLayout;
