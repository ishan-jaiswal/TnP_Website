import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import Header from './Header'
import useLocalStorage from './useLocalStorage';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),      
    }    
  },
}));
export default function Profile() {
    const classes = useStyles();
    const [details,setDetails]=useLocalStorage('details',{first:'Ishan',last:'Jaiswal',phone:7059078173,alt_email:'devhjaiswal@gmail.com',class_10_per:84.4,class_10_year:2015,class_12_per:92,class_12_year:2017,backlogs:0,pass_year:2021,cgpa:9.15})
    const [user]=useLocalStorage('user',{email:'',password:''})
    const handleSubmit=()=>{
      console.log(details);
    }
    return (
        <div>         
            <Grid container
                direction="row"
                justify="center"               
                alignItems="flex-start"
                >
                  <Header />            
                <Grid item xs={12} style={{paddingTop:'1vh'}}>
                    <form className={classes.root} autoComplete="on">
                        <TextField id="first-name" value={details.first} onChange={e=>setDetails({...details,first:e.target.value})} label="First Name" variant="outlined" />
                        <TextField id="last-name" value={details.last} onChange={e=>setDetails({...details,last:e.target.value})} label="Last Name" variant="outlined"/>            
                        <TextField id="email" defaultValue={user.email}
                            InputProps={{
                              readOnly: true,
                            }}  label="Email" variant="outlined"/>            
                        <TextField id="phone" value={details.phone} onChange={e=>setDetails({...details,phone:parseInt(e.target.value)})} label="Phone No." variant="outlined"/>            
                        <TextField id="alt-email" value={details.alt_email} onChange={e=>setDetails({...details,alt_email:e.target.value})} label="Alternate Email" variant="outlined"/>            
                    </form>                    
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField id='class_10_marks' value={details.class_10_per} onChange={e=>setDetails({...details,class_10_per:e.target.value})} label='Class 10 Percentage' variant='outlined' />
                    <TextField id='class_10_year' value={details.class_10_year} onChange={e=>setDetails({...details,class_10_year:parseInt(e.target.value)})} label='Class 10 Passing Year' variant='outlined' />
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField id='class_12_marks' value={details.class_12_per} onChange={e=>setDetails({...details,class_12_per:e.target.value})} label='Class 12 Percentage' variant='outlined' />
                    <TextField id='class_12_year' value={details.class_12_year} onChange={e=>setDetails({...details,class_12_year:e.target.value})} label='Class 12 Passing Year' variant='outlined' />
                  </form>
                </Grid>
                <Grid item xs={12}>
                  <form className={classes.root} autoComplete="on">
                    <TextField id='cgpa' value={details.cgpa} onChange={e=>setDetails({...details,cgpa:parseFloat(e.target.value)})} label='CGPA' variant='outlined' />
                    <TextField id='backlogs' value={details.backlogs} onChange={e=>setDetails({...details,backlogs:parseInt(e.target.value)})} label='No. of Backlogs' variant='outlined' />
                    <TextField id='passing_year' value={details.pass_year} onChange={e=>setDetails({...details,pass_year:parseInt(e.target.value)})} label='Passing Year' variant='outlined' />
                  </form>
                </Grid>
                <Grid item><Button onClick={handleSubmit} variant='contained'>Save Changes</Button></Grid>
            </Grid>
        </div>
    )
}
