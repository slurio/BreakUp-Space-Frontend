import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../Redux/actions';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  

const logoutHandle = () => {
    props.setUser('')
}

  return (
    <div className={classes.root}>

      <AppBar position="static" color="default">
        <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            TabIndicatorProps={{style: {backgroundColor: "transparent"}}}
        >
          <NavLink to='/home'>
            <Tab label="Home" {...a11yProps(0)}/>
          </NavLink>
          <NavLink to='/posts'>
            <Tab label="Community" {...a11yProps(1)}/>
          </NavLink>
          <NavLink to='/quiz'>
            <Tab label="The Quiz" {...a11yProps(2)}/>
          </NavLink>
            <Tab label="Contact" disabled {...a11yProps(3)}/>
          { props.user ?
          <Tab label="Logout" onClick={logoutHandle} {...a11yProps(4)}/>
          :
          <NavLink to='/login'>
            <Tab label="Login" {...a11yProps(4)}/>
          </NavLink>
          }
        </Tabs>
      </AppBar>
    </div>
  )}

  const msp = state => {
    return {
      user: state.user
    }
  }

  const mdp = dispatch => {
    return {
      setUser: (a) => dispatch(loginUser(a))
    }
  }

export default connect(msp, mdp)(NavBar);