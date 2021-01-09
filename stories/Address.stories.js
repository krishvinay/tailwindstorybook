import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import Box from "@material-ui/core/Box";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import './address.css';
function getSteps() {
    return ["Cart", "Address", "Payment"];
}
export default {
  title: 'Example/Address',
  component: AddressShow,
  
};
export const AddressShow = () =>
 {
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();
    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div >
        <div className="address_add">
        <Grid container>
            <Grid item xs={12} sm={12} className="address_link">
                <Stepper activeStep={activeStep} className="address_steps" alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={7} className="bg-white p-5 rounded-sm address_grid">
                <Box p={1} className="flex font-bold address_head">
                    <Box p={1} className="inline-flex flex-grow items-center p-4 flexing">
                        <HomeIcon />
                        MY ADDRESSES
                    </Box>
                    <Box p={1} className="inline-flex items-center p-4 colorchange">
                        <AddIcon />
                        ADD NEW ADDREESS
                    </Box>
                </Box>

                <Grid item xs={12} container className="m-auto p-8 address_paper">
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} name="checkedH" />} label="" />
                        </FormGroup>
                    </Grid>

                    <Grid item xs container direction="column" className="address_data">
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Vivek Jose <span className="address_span"> Home</span>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                3c,3rd Floor,Carnival infopark phase 2,kakkanad,Ernakulam,Kerala-682026
                            </Typography>

                            <Typography variant="body2" color="textSecondary">
                                Mobile:9633569680
                            </Typography>
                        </Grid>
                        <Grid item className="address_button">
                            <Button variant="contained" className="bg-white button_back" startIcon={<DeleteIcon />}>
                                REMOVE
                            </Button>
                           
                            <Button variant="contained" className="bg-white button_back" startIcon={<EditIcon />}>
                                EDIT
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="subtitle1" className="text-sm font-bold rounded-md pt-1 pb-1 pr-4 pl-4 address_option">
                            COD Available
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} container className="m-auto p-8 address_paper">
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} name="checkedH" />} label="" />
                        </FormGroup>
                    </Grid>

                    <Grid item xs container direction="column" className="address_data">
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Vivek Jose <span className="address_span"> Office</span>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                3c,3rd Floor,Carnival infopark phase 2,kakkanad,Ernakulam,Kerala-682026
                            </Typography>

                            <Typography variant="body2" color="textSecondary">
                                Mobile:9633569680
                            </Typography>
                        </Grid>
                        <Grid item className="address_button">
                            <Button variant="contained" className="button_back" startIcon={<DeleteIcon />}>
                                REMOVE
                            </Button>
                            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                            <Button variant="contained" className="button_back" startIcon={<EditIcon />}>
                                SEDIT
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography variant="subtitle1" className="text-sm font-bold rounded-md pt-1 pb-1 pr-4 pl-4 address_option">
                            COD Available
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={5} className="summary">
                <div className="address_payment">
                    <Typography variant="h6" gutterBottom>
                        Payment Summary
                    </Typography>

                    <div className="p-5">
                        <Box className="flex p-3" p={1}>
                            <Box p={1} className="inline-flex flex-grow items-center p-0 flexing">
                                Price - 2 Items
                            </Box>
                            <Box p={1}>1,06,600</Box>
                        </Box>
                        <Box className="flex p-3" p={1}>
                            <Box p={1} className="inline-flex flex-grow items-center p-0 flexing">
                                Delivery Fees
                            </Box>
                            <Box p={1}>Free</Box>
                        </Box>

                        <div className="address_total">
                            <Box className="flex p-3 address_summary" p={1}>
                                <Box p={1} className="inline-flex flex-grow items-center p-0 flexing">
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

                <Button variant="contained" className="payment">
                    Proceed To Checkout
                </Button>
            </Grid>
        </Grid>
    </div>
    </div>
    );
}