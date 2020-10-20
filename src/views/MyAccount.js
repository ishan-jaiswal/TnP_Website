import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),      
    }    
  },
}));

export default function MyAccount() {
    const classes = useStyles();
    const [password,setPassword]=React.useState({key:'1234',showPassword:false})
    // const [email,setEmail]=React.useState('1705500@kiit.ac.in')
    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
      };
    return (
        <div >    
            <Grid container
                direction="row"
                justify="center"               
                alignItems="flex-start"
                >
                <Grid item xs={12}>
                    <form className={classes.root} autoComplete="on">   
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>                            
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={password.showPassword ? 'text' : 'password'}                        
                        value={password.key}
                        onChange={e=>setPassword({...password,key:e.target.value})}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}                            
                            edge="end"
                            >
                            {password.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }                        
                    />
                    </form>                    
                </Grid>
                <Grid item><Button variant='primary'>Save Changes</Button></Grid>
            </Grid>                      
        </div>
    )
}
