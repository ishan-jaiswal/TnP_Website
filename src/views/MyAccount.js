import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Header from './Header'
import Snackbar from '@material-ui/core/Snackbar';
import useLocalStorage from './useLocalStorage'
import CloseIcon from '@material-ui/icons/Close';
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
    const [user,setUser]=useLocalStorage('user',{email:'',password:''})
    const [password,setPassword]=React.useState({key:user.password,showPassword:false})
    const [open, setOpen] = React.useState(false);
    // const [email,setEmail]=React.useState('1705500@kiit.ac.in')
    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
      };
    const handleChangePassword=()=>{      
      if (password.key!==user.password){
        setUser({...user,password:password.key})
        setOpen(true)
      }
    }
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return (
        <div >            
            <Grid container
                direction="row"
                justify="center"               
                alignItems="flex-start"
                >
                <Header />
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
                <Grid item><Button variant='primary' onClick={handleChangePassword}>Save Changes</Button></Grid>
            </Grid>      
            <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Password Changed"
                action={
                  <React.Fragment>                  
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
               
        </div>
    )
}
