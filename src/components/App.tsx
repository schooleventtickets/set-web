
import NavBar from './NavBar';
import useStyles from '../styles/styles';
import { Box } from '@material-ui/core';
import Banner from './Banner';
import React from 'react';


function App() {
  const classes = useStyles();
  return (
        <React.Fragment> 
        <NavBar />
        <Banner />
        </React.Fragment>
  );
}

export default App;
