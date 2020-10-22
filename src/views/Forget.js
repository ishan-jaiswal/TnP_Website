import React from 'react'
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import useLocalStorage from './useLocalStorage';
import {Redirect} from 'react-router-dom'

export default function Forget() {  
    const [user,setUser]=useLocalStorage('user',{email:'',password:''})  
    const [otp,setOtp]=React.useState('');
    const [redirect,setRedirect]=React.useState(false);
    const handleReset=()=>{
        setRedirect(true);
    }
    return (
        <div>
            <Grid container justify='center' alignItems='flex-start' direction='row'>
                <Grid item xs={12} style={{marginTop:'2vh'}}>
                    <Typography variant="title">Password Reset</Typography>  
                </Grid>
                <Grid item xs={12} style={{marginTop:'4vh'}}>
                    <TextField
                        id="new_pasword"
                        variant="outlined"              
                        type="password"                        
                        value={user.password}
                        label='New Password'
                        onChange={e=>setUser({...user,password:e.target.value})}                           
                        />    
                </Grid>
                <Grid item xs={12} style={{marginTop:'2vh'}}>
                    <TextField
                        id="otp"
                        variant="outlined"              
                        type="password"
                        style={{ marginTop: '4vh' }}            
                        label='Enter the OTP'
                        value={otp}
                        onChange={e=>setOtp(parseFloat(e.target.value))}                           
                        />
                </Grid>
                <Grid item xs={12} style={{marginTop:'2vh'}}>
                    <Button variant='contained' onClick={handleReset}>Reset</Button>
                </Grid>
                {redirect===true &&(
                    <Redirect to={{pathname:'/login'}} />
                )}
            </Grid>            
            
            
        </div>
    )
}
