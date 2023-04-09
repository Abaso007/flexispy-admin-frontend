import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import SubDashboardLayout from 'src/layouts/SubDashboardLayout';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function TestView() {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="My Users"
    >
      <SubDashboardLayout>

      </SubDashboardLayout>
    </Page>
  );
}

export default TestView;
