import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vh'
  },  
  expand: {
    transform: 'rotate(-90deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },  
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function AllJobs() {
  const classes = useStyles();
  const [redirect,setRedirect]=React.useState(false);

  const handleExpandClick = () => {    
    setRedirect(true)
  };
  const handleApply=()=>{
      console.log('apply');
  }
  const handleDownload=()=>{

  }
  const d=new Date();
  return (
    <Grid container justify='center' alignItems='center' direction='column' >
        <Grid item xs={12} style={{marginTop:'2vh'}}>
        <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    A
                </Avatar>
                }
                action={
                <Button aria-label="apply-now" color='primary' variant='outlined' disabled={false} onClick={handleApply}>Apply Now</Button>
                }
                title="ABC Company"
                subheader={d.toDateString()}
            />      
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="span">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>*/}
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> 
                <Typography variant="body2" color="textSecondary" component="span">
                    30th November, 2020
                </Typography>
                <Button onClick={handleDownload} style={{marginLeft:'2vh'}} color='primary' disabled={false} variant='contained'>Download PDF</Button>
                <IconButton
                className={clsx(classes.expand)}
                onClick={handleExpandClick}                
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>            
            </Card>
        </Grid>
        {redirect===true &&(
          <Redirect push to={{pathname:'/job'}} />
        )}
    </Grid>
  );
}
