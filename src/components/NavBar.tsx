import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import logo from '../resources/images/logo.png';
import useStyles from '../styles/styles';
import Box from '@material-ui/core/Box';


export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navBarDiv} position="static">
      <Grid
        className={classes.navBox}
        container
        justify="center"
        alignItems="center"
        spacing={2}>
        <Grid container item xs={6} spacing={2}>
          <Button className={classes.navButton} color="inherit">
            Find Game Tickets
          </Button>
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <Button className={classes.navLogoBox} >
            <img className={classes.navLogo} src={logo} alt="logo" />
          </Button>
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <Button className={classes.navLogoBox} >

          </Button>
        </Grid>
      </Grid>
    </AppBar >
  );
}
