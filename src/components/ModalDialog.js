import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function ModalDialog(){
	const styles = (theme) => ({
  		root: {
    		margin: 0,
    		padding: theme.spacing(3),
  		}
  		
	});
	const Content = withStyles((theme) => ({
  		root: {
    			padding: theme.spacing(2),
  				},
		}))(MuiDialogContent);

	const Title = withStyles(styles)((props) => {
  	const { children, classes, onClose, ...other } = props;
  		return (
    		<MuiDialogTitle disableTypography className={classes.root} {...other}>
      		<Typography variant="h6"></Typography>
        	<IconButton aria-label="close" >
          	<CloseIcon />
        	</IconButton>
      
    	</MuiDialogTitle>
  		);
	});

	return(

	<Dialog  maxWidth="lg" aria-labelledby="customized-dialog-title" >
        <Title></Title>  
          <Content>
                <Grid container spacing={5}>
                  	<Grid item xs={12} sm={8} >
                  	<img />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <Typography variant="h4" component="h4">
                    NAME
                  </Typography>
                  <br/>
                  <Typography >
                    	Type: LEBANESE
                  </Typography>
                  <br/>
                  <Typography gutterBottom>
                    	Average Cost for Two: 50
                  </Typography>
                  <br/>
                  <Typography gutterBottom>
                    	Address: ZAHLE
                  </Typography>
                  <br/>
                  <Typography gutterBottom>
                    Phone Number: '08888888'
                  </Typography>
                  <br/>
                </Grid>
            </Grid>
        </Content>
    </Dialog>

	)
 }

 export default ModalDialog;