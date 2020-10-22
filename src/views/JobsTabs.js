import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ActiveInactive from './ActiveInactive'
import AllJobs from './AllJobs'
import { Grid } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="simple tabs example">
          <Tab label="All Jobs" {...a11yProps(0)} />
          <Tab label="My Jobs" {...a11yProps(1)} />          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Grid container justify='center' alignItems='center' direction='column'>
          <Grid item xs={12}>
            <AllJobs />     
          </Grid>
          <Grid item xs={12}>
            <AllJobs />     
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>               
        <ActiveInactive />                                
      </TabPanel>      
    </div>
  );
}