import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Select from 'react-select';
import './Exchange.css';
import img1 from './assets/exchange1.png';
import img2 from './assets/exchange2.png';
import img3 from './assets/exchange3.png';
const images1 = {
src:img1,
alt:'product1',
};
const images2 = {
src:img2,
alt:'product2',
};
const images3 = {
src:img3,
alt:'product3',
};
const options = [
    { value: 'Apple', label: 'Apple' },
    { value: 'Nokia', label: 'Nokia' },
    { value: 'Vivo', label: 'Vivo' },
    { value: 'Realme', label:'Realme'},
  ]; 

  const options1 = [
    { value: 'Apple Iphone 12 pro', label: 'Apple Iphone 12 pro' },
    { value: 'Apple Iphone 12 mini', label: 'Apple Iphone 12 mini' },
    { value: 'Apple Iphone 12 ', label: 'Apple Iphone 12' },
    { value: 'Apple Iphone 11 pro', label:'Apple Iphone 11 pro'},
  ];

const styles = (theme) => ({
    
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
export default {
  title: 'Example/Exchange',
  component: ExchangeOffer,
  
};
export const ExchangeOffer = () =>
 {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState("md");
    const [state, setState] = React.useState({});
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <div>
            <Button variant="outlined" className="exchange_offer capitalize" onClick={handleClickOpen}>
                exchange offer
            </Button>
            <Dialog onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}></DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="h6" gutterBottom>
                                <b>Exchange offer</b>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} md={4} lg={4} className="p-4">
                        <Select options = {options} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} className="p-4">
                        <Select options = {options1} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} className="p-4">
                            <div>
                            <input className="p-1.5 w-full exchange_imei"  type="text1" placeholder="verify" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="pb-3">
                        <Grid item xs={12} sm={12} md={12} lg={12} className="p-0">
                            <Box p={1} className="md:flex lg:flex inline-block font-bold p-0">
                                <Box p={1} className="inline-flex items-center p-0 flex-grow">
                                    <FormGroup row>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1" className="ml-6 -mt-1 "> I agree to the <span className="exchange_terms">terms and conditions</span></label>
                                        
                                    </FormGroup>
                                </Box>
                                <Box p={1}>
                                    <Button variant="contained" className="exchange_button">
                                        Exchange and Buy
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="p-4 exchange_data">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <h6 className="font-bold capitalize">
                                how exchange work?
                            </h6>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className="p-4 exchange_data">
                        <Grid item xs={12} sm={4} md={4} lg={4} className="text-center p-4">
                            <h5 className="font-bold capitalize text-lg exchange_datatitle">
                                Pick modal
                            </h5>
                            <div>
                            <img className="md:ml-20 lg:ml-20 ml-16" src={images1.src} alt={images1.alt} />
                          
                            </div>

                            <p>
                                Exchange phones all conditions.It will be verified
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} className="text-center p-4">
                            <h5 className="font-bold capitalize text-lg exchange_datatitle">
                                get value
                            </h5>
                            <img className="md:ml-20 lg:ml-20 ml-16" src={images2.src} alt={images2.alt} />
                           

                            <p>
                                Based on the checks,the exchange value can change
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} className="text-center p-4">
                            <h5 className="font-bold capitalize text-lg exchange_datatitle">
                                get order
                            </h5>
                            <img className="md:ml-20 lg:ml-20 ml-16" src={images3.src} alt={images3.alt} />
                            

                            <p>
                                If there's a change in value , you can pay the difference amount
                            </p>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
        </div>
    );
}