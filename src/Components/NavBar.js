import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Redirect} from 'react-router-dom';
import PostGallery from './PostGallery';
import Quiz from './Quiz';
import Login from './Login';

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

function NavBar() {
    const classes = useStyles();
    // const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      if (event.target.innerHTML === "Community") {
        setCommunity(!community);
        setQuiz(false);
        setLogin(false);
        setHome(false);
    } else if (event.target.innerHTML === "The Quiz") {
        setQuiz(!quiz);
        setCommunity(false);
        setLogin(false);
        setHome(false);
    } else if (event.target.innerHTML === "Log-In") {
        setLogin(!login);
        setCommunity(false);
        setHome(false);
        setQuiz(false);
    } else if (event.target.innerHTML === "Home") {
        setHome(!home);
        setCommunity(false);
        setLogin(false);
        setQuiz(false);
    }
    setValue(newValue);
    };
  

  const [community, setCommunity] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [login, setLogin] = useState(false);
  const [home, setHome] = useState(false);
 
 

  return (
    <div className={classes.root}>
        {home ? <Redirect to={'/home'} /> : null}
        {community ? <Redirect to={'/posts'} /> : null}
        {quiz ? <Redirect to={'/quiz'} /> : null}
        {login ? <Redirect to={'/login'} /> : null}

      <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
        >
            <Tab label="Home" {...a11yProps(0)}/>
          <Tab label="Community" {...a11yProps(1)}/>
          <Tab label="The Quiz" {...a11yProps(2)}/>
          <Tab label="Contact" disabled {...a11yProps(3)}/>
          <Tab label="Log-In" {...a11yProps(4)}/>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavBar;