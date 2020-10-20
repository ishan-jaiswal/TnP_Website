import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),      
    }    
  },
}));
export default function Profile() {
    const classes = useStyles();
    const [name,setName]=React.useState({first:'Ishan',last:'Jaiswal'})
    const [email,setEmail]=React.useState('1705500@kiit.ac.in')
    return (
        <div className={classes.root}>               
            <Grid container
                direction="row"
                justify="center"               
                alignItems="flex-start"
                >
                <Grid item xs={12}>
                    <form className={classes.root} autoComplete="on">
                        <TextField id="first-name" value={name.first} onChange={e=>setName({...name,first:e.target.value})} label="First Name" variant="outlined" />
                        <TextField id="last-name" value={name.last} onChange={e=>setName({...name,last:e.target.value})} label="Last Name" variant="outlined"/>            
                        <TextField id="email" value={email} onChange={e=>setEmail(e.target.value)} label="Email" variant="outlined"/>            
                    </form>                    
                </Grid>
                <Grid item><Button variant='primary'>Save Changes</Button></Grid>
            </Grid>
        </div>
    )
}
