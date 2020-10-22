import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import useLocalStorage from './useLocalStorage';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingLeft: '1vw',
        paddingRight: '1vw',
      },
      textStyle1: {
        color: '#FFFFFFA6',
        fontSize: '2.5vw',
        marginTop: '2vh',
      },
      textStyle2: {
        color: '#FFFFFFA6',
        fontSize: '1.5vw',
      },
      textfield: {
        color: '#FFFFFFA6',
        fontSize: '1.5vw',
      },
      nameInput: {
        fontSize: '1vw',
        color: '#FFFFFF',
      },
    notchedOutline: { borderWidth: '1px', borderColor: '#5DAAE0 !important' },
    searchBtn: {
        marginTop: '8vh',
        minWidth: '5vw',
        minHeight: '2.188vw',
        fontSize: '0.95vw',
        border: 'solid 0.75px #3B617C',
        // marginRight: '0.5rem',
        alignSelf: 'center',
        color: '#5DAAE0',
        '&:hover': {
        backgroundColor: '#5daae0',
        color: 'white',
        },
    },
    searchBtnDisabled: {
        minWidth: '5vw',
        minHeight: '2.188vw',
        fontSize: '0.95vw',
        border: 'solid 0.75px #3B617C',
        // marginRight: '0.5rem',
        alignSelf: 'center',
        color: 'white !important',
        background: '#FFFFFFa5',
        '&:hover': {
        cursor: 'default',
        backgroundColor: '#FFFFFFa5',
        },
    },
  });
export default function Login() {
    const classes = useStyles();
    const [user,setUser]=useLocalStorage('user',{email:'',password:''})
    const [redirect,setRedirect]=React.useState({login:false,forget:false})
    const checkLogin=()=>{
        if (user.email==='1705500@kiit.ac.in' && user.password==='1234')
        {
            setRedirect({...redirect,login:true})
        }
    }
    const handleForgetPassword=()=>{
      console.log('forget');
      setRedirect({...redirect,forget:true})
    }
    return (
        <div>
            <Grid container className={classes.root} spacing={2} xs={12}>
            <Grid
            container
            style={{ height: '95vh' }}
            justify="center"
            alignItems="center"
            >
            <Grid
                item
                style={{
                height: '60vh',
                width: '60vh',
                backgroundColor: '#4caf50',
                }}
                alignItems="center"
                direction="column"
                container
            >
                <Typography className={classes.textStyle1} >Hey There !</Typography>
                <Typography className={classes.textStyle2} >
                Enter Your Email ID :
                </Typography>
                <TextField
                id="outlined-basic"
                variant="outlined"              
                type="email"
                style={{ marginTop: '4vh' }}
                value={user.email}
                onChange={e=>setUser({...user,email:e.target.value})}    
                InputProps={{
                    classes: {
                      input: classes.nameInput,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}            
                />
                <Typography className={classes.textStyle2}>
                Enter the Password :
                </Typography>
                <TextField
                id="outlined-basic"
                variant="outlined"              
                type="password"
                style={{ marginTop: '4vh' }}
                value={user.password}
                onChange={e=>setUser({...user,password:e.target.value})}     
                InputProps={{
                    classes: {
                      input: classes.nameInput,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}        
                />
                <Button
                size="small"
                className={classes.searchBtn}
                classes={{ disabled: classes.searchBtnDisabled }}
                disabled={user.email === '' && user.password===''}              
                onClick={checkLogin}
                >
                Login
                </Button>
                <Link style={{marginTop:'2vh'}} onClick={handleForgetPassword}>Forget Password?</Link>
                {redirect.login===true && (
                            <Redirect to={{pathname:'/home'}}/>
                        )}
                {redirect.forget===true &&(
                  <Redirect to={{pathname:'/forget'}} />
                )}
            </Grid>
            </Grid>
            </Grid>
            {/* <Grid item>
                <Grid item> 
                    <Grid container >
                        <h3>Enter User Name and Password </h3>                        
                        <TextField type='text' value={user.enail} onChange={e=>setUser({...user,email:e.target.value})}/>
                        <TextField type='text' value={user.password} onChange={e=>setUser({...user,password:e.target.value})}/>
                        <Button onClick={checkLogin}>Login</Button>
                        {redirect===true && (
                            <Redirect to={{pathname:'/home',state:{email:user.email}}}/>
                        )}
                    </Grid>
                </Grid>
            </Grid> */}
        </div>
    )
}
