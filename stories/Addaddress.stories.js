import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Select from 'react-select';
import './addaddress.css';
const options = [
    { value: 'TamilNadu', label: 'TamilNadu' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Andra Pradesh', label:'Andra Pradesh'},
    { value: 'Hyderabed', label:'Hyderabed'},
  ]; 
const BootstrapInput = withStyles((theme) => ({}))(InputBase);
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

function getSteps() {
    return ["Cart", "Address", "Payment"];
}

export default {
  title: 'Example/Address',
  component: AddressNew,
  
};
export const AddressNew = () =>
 {
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [currency, setCurrency] = React.useState("0");
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();
    const [values, setValues] = React.useState("");

    const handleChanges = (event) => {
        setValue(event.target.value);
    };
    const handleChanged = (event) => {
        setCurrency(event.target.value);
    };
    const classes = useStyles();
    return (
        <div className="flex-grow m-10">
        <Grid container>
            <Grid item xs={12} sm={12} className="add_stepper">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
        </Grid>

        <Grid container spacing={3} className="pt-7 pb-7 pr-0 pl-0">
            <Grid item xs={12} sm={7} md={7} lg={7} className="bg-white add_wishlist">
                
                    <Box p={1} className="font-bold flex text-lg p-4 add_banner">
                        <Box p={1} className="flex-grow inline-block items-center p-0 add_flexing">
                            <HomeIcon />
                            My Addresses
                        </Box>
                    </Box>
                

                <Grid container spacing={1} className="p-10 m-0 add_details">
                    <div className="add_forms" noValidate autoComplete="off">
                        <div>
                            <Button variant="contained" className="bg-black capitalize mb-7 mt-0 mr-0 ml-0 add_location">
                                <MyLocationIcon />
                                Use my current location
                            </Button>
                        </div>

                        <form noValidate>
                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    Name *
                                </InputLabel>
                                <BootstrapInput className="flex flex-wrap mt-8 mb-0 mr-0 ml-0 add_inputs" placeholder="Name" />
                            </FormControl>
                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    Mobile Number *
                                </InputLabel>
                                <BootstrapInput className="flex flex-wrap mt-8 mb-0 mr-0 ml-0 add_inputs" placeholder="Mobile" />
                            </FormControl>
                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    Pin Code *
                                </InputLabel>
                                <BootstrapInput className="flex flex-wrap mt-8 mb-0 mr-0 ml-0 add_inputs" placeholder="pincode" />
                            </FormControl>
                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    Locality
                                </InputLabel>
                                <BootstrapInput className="flex flex-wrap mt-8 mb-0 mr-0 ml-0 add_inputs" placeholder="Locality" />
                            </FormControl>
                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    Address *
                                </InputLabel>
                                <BootstrapInput className="flex flex-wrap mt-8 mb-0 mr-0 ml-0 add_inputs add_field" rowsMax="4" /> 
                                
                            </FormControl>

                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    City/District/Town
                                </InputLabel>
                                <BootstrapInput className="flex flex-wrap mt-8 mb-0 mr-0 ml-0 add_inputs" placeholder="city" />
                            </FormControl>

                            <FormControl className="add_formdata">
                                <InputLabel shrink htmlFor="bootstrap-input" className="add_labelcontent">
                                    Address
                                </InputLabel>
                                <Select className="mt-8 mb-0 mr-0 ml-0 add_labels" options = {options} />
                                
                            </FormControl>
                            <FormControl className="add_formdata">
                                <RadioGroup row className="inline-flex items-center m-3 add_radio" defaultValue="Home">
                                    <FormLabel component="legend">Address Type:</FormLabel>
                                    <FormControlLabel value="Home" color="default" control={<Radio />} label="Home" />
                                    <FormControlLabel value="Office" color="default" control={<Radio />} label="Office" />
                                    <FormControlLabel value="Other" color="default" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl className="add_formdata">
                                <Button variant="contained" className="add_buttons">
                                    Save and Deliver here{" "}
                                </Button>
                            </FormControl>
                            <FormControl className="add_formdata">
                                <Button variant="contained" className="add_cancels">
                                    cancel
                                </Button>
                            </FormControl>
                        </form>
                    </div>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5} className="add_sum">
                <div className="add_payments">
                    <Typography variant="h6" gutterBottom>
                        Payment Summary
                    </Typography>

                    <div className="p-8">
                        <Box className="flex pb-8 pt-0 pr-0 pl-0 items-center justify-between" p={1}>
                            <Box p={1} className="add_flexing">
                                Price - 2 Items
                            </Box>
                            <Box p={1}>1,06,600</Box>
                        </Box>
                        <Box className="flex pb-8 pt-0 pr-0 pl-0 items-center justify-between" p={1}>
                            <Box p={1} className="add_flexing">
                                Delivery Fees
                            </Box>
                            <Box p={1} className="capitalize add_coupon">
                                Free
                            </Box>
                        </Box>

                        <div className="add_total">
                            <Box className="flex items-center justify-between add_align" p={1}>
                                <Box p={1} className="add_flexing">
                                    Total Amount
                                </Box>
                                <Box p={1}>1,06,600</Box>
                            </Box>
                            <Typography variant="subtitle2" gutterBottom>
                                <LocalOfferIcon fontSize="small" />
                                You will be save 5,000 in this order
                            </Typography>
                        </div>
                    </div>
                </div>

                <Button variant="contained" className="add_payment">
                    Proceed To Checkout
                </Button>
            </Grid>
        </Grid>
    </div>
    );
}