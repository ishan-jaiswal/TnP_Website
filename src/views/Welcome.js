import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

export default function Welcome() {
    const [redirect1,setRedirect1]=React.useState(false)
    // React.useEffect(() => {
        
    // }, [])
    const checkLogin=()=>{
        setRedirect1(true)
    }
    return (
        <div>
            <Grid item xs={12}>
                <Grid container >
                    <Typography>Welcome</Typography>
                </Grid>
                <Grid>
                    <Button onClick={checkLogin}>Login</Button> 
                    {redirect1===true &&(
                        <Redirect to={{pathname:'/login'}}/>
                    )}
                </Grid>
            </Grid>
        </div>
    )
}
