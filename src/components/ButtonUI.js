import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple, red, grey } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
const ColorButton = withStyles(theme => ({
    root: {
    
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: red[900],
      '&:hover': {
        backgroundColor: grey[900],
      },
    },
  }))(Button);

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

function verifyIcon(icon){
  if(icon == "register"){
    return PersonIcon;
  }
}

export default function CustomizedButtons(props) {
    const classes = useStyles();
  
    return (
      <div>
        <ColorButton variant="contained" type={props.type} color="primary" className={classes.margin}>
          {props.buttonName}
          {props.icon == "login" ? <PersonIcon /> : ''}
        </ColorButton>
       
  
      </div>
    );
  }