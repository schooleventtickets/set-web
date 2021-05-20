import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../styles/styles';
import ScreenImage from '../resources/images/banner2.png'
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';



export default function Banner() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
        <Box>
            <Typography variant="h1" color="initial">
               Go Digital
            </Typography>
        </Box>
    </React.Fragment>
  );
}
