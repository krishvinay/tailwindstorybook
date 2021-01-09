import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextField from "@material-ui/core/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './cart.css';
import img1 from './assets/cart2.png';
import img2 from './assets/cart3.png';
import img3 from './assets/cart4.png';
import img4 from './assets/cart5.png';
import img5 from './assets/mycart_protection.png';
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
const images4 = {
src:img4,
alt:'product4',
};
const images5 = {
src:img5,
alt:'product5',
};
const brand = [
    {
        value: "1",
        label: "Regular Delivery",
    },
    {
        value: "2",
        label: "Free Delivery",
    },
];
function getSteps() {
    return ["Cart", "Address", "Payment"];
}

export default {
  title: 'Example/Mycart',
  component: MyCart,
  
};
export const MyCart = () =>
 {
    
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [currency, setCurrency] = React.useState("");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleChanges = (event) => {
        setProducts(event.target.value);
    };
    return (
        <div>
            <div>
            <div className="cart_header">
            <Grid container>
                <Grid item xs={12} sm={12} className="cart_links">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>

            <Grid container spacing={1} className="pt-4 pb-4 pr-0 pl-0 cart_heads">
                <Grid item xs={12} sm={7} md={7} lg={7} className="bg-white cart_wishlist">
                    <Box p={1} className="font-bold flex cart_banner">
                        <Box p={1} className="flex-grow inline-flex items-center p-3 cart_flexing">
                            <ShoppingCartIcon fontSize="small" />
                            My Cart (2)
                        </Box>
                    </Box>
                    <Grid container spacing={1} className="p-7 cart_details">
                        <Grid item xs={12} lg={2}>
                        <img src={images1.src} alt={images1.alt} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={10}>
                            <Grid container spacing={1} className="cart_divided">
                                <Grid item xs={12} sm={8} md={8} lg={8} className="cart_product">
                                    <h6 className="font-bold capitalize" variant="subtitle1">one plus 8 (glacier green, 128gb)</h6>
                                    <Typography className="uppercase font-medium cart_ram" variant="body1" gutterBottom>
                                        8gb ram
                                    </Typography>
                                    <Typography variant="body2" className="cart_rate" color="textSecondary">
                                        <span>
                                            <FontAwesomeIcon icon="rupee-sign" />
                                            1,19,249
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon="rupee-sign" fontSize="small" />
                                            <del>1,19,249</del> (4%OFF)
                                        </span>
                                        <span>
                                            9 offers available <InfoSharpIcon fontSize="small" />
                                        </span>
                                    </Typography>
                                </Grid> 
                                <Grid item xs={12} sm={4} md={4}lg={4}>
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        value={currency}
                                        onChange={handleChange}
                                        className="cart_delivery"
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        {brand.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <Typography variant="body1" className="cart_free">
                                        Free<span>Delivery by Nov 20</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box className="flex cart_summary" p={1}>
                                <Box p={1} className="flex-grow inline-flex items-center p-3 cart_flexing">
                                    <ButtonGroup  aria-label="outlined primary button group">
  <Button>-</Button>
  <Button>0</Button>
  <Button>+</Button>
</ButtonGroup>
                                </Box>
                                <Box p={1} className="cart_item">
                                    Move to Wishlist
                                </Box>
                                <Box p={1}>
                                    <Typography variant="subtitle1" className="flex items-center cart_moves">
                                        Remove <DeleteIcon size="small" />
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <div className="p-0 sm:p-6 md:p-6 lg:p-6">
                        <div className="p-5 cart_prowrp">
                            <div className="flex">
                                <div className="cart_protfirst">
                                <img src={images5.src} alt={images5.alt} />
                                </div>
                                <div className="cart_protsecond">
                                    <Typography variant="subtitle1" gutterBottom>
                                        complete mobile protection
                                    </Typography>

                                    <Typography variant="body2" className="cart_rates" color="textSecondary">
                                        <span>
                                            <FontAwesomeIcon icon="rupee-sign" />
                                            5,000
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon="rupee-sign" fontSize="small" />
                                            <del>1,33,576</del>{" "}
                                        </span>
                                        <span>(4%OFF)</span>
                                    </Typography>
                                    <Typography variant="body2" className="cart_rates">
                                        Brand authorised repair / replacement guarantee for 1 year.Special offer "Get 6 month Google One trial with complete mobile protection"
                                        <span>Know More</span>
                                    </Typography>
                                    <Button variant="contained" className="cart_protect">
                                        Add Protection
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>


                    </Grid>
                    <Grid container spacing={1} className="p-7 cart_details">
                        <Grid item xs={12} lg={2}>
                        <img src={images2.src} alt={images2.alt} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={10}>
                            <Grid container spacing={1} className="cart_divided">
                                <Grid item xs={12} sm={8} md={8} lg={8} className="cart_product">
                                    <h6 className="font-bold capitalize">one plus wireless z earphones</h6>
                                    <Typography className="uppercase font-medium cart_ram"  variant="body1" gutterBottom>
                                        black
                                    </Typography>
                                    <Typography variant="body2" className="cart_rate" color="textSecondary">
                                        <span>
                                            <FontAwesomeIcon icon="rupee-sign" />
                                           3,234
                                        </span>
                                        <span>
                                            
                                        </span>
                                        <span>
                                            9 offers available <InfoSharpIcon fontSize="small" />
                                        </span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        value={currency}
                                        onChange={handleChange}
                                        className="cart_delivery"
                                        SelectProps={{
                                            native: true,
                                        }}
                                    >
                                        {brand.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <Typography variant="body1" className="cart_free">
                                        Free<span>Delivery by Nov 20</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box className="flex cart_summary" p={1}>
                                <Box p={1} className="flex-grow inline-flex items-center p-3 cart_flexing">
                                   
                                    <ButtonGroup  aria-label="outlined primary button group">
  <Button>-</Button>
  <Button>0</Button>
  <Button>+</Button>
</ButtonGroup>
                                </Box>
                                <Box p={1} className="cart_item">
                                    Move to Wishlist
                                </Box>
                                <Box p={1}>
                                    <Typography variant="subtitle1" className="flex items-center cart_moves">
                                        Remove <DeleteIcon size="small" />
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        

                        
                        

                    </Grid>
                    
                </Grid>

                <Grid item xs={12} sm={5} md={5} lg={5} className="cart_summarys">
                    <div className="cart_payments">
                        <Typography variant="h6" gutterBottom>
                            Payment Summary
                        </Typography>

                        <div className="p-3">
                            <Box className="flex p-3" p={1}>
                                <Box p={1} className="flex-grow inline-flex items-center p-0 cart_flexing">
                                    Price - 2 Items
                                </Box>
                                <Box p={1}>1,06,600</Box>
                            </Box>
                            <Box className="flex p-3" p={1}>
                                <Box p={1} className="flex-grow inline-flex items-center p-0 cart_flexing">
                                    Delivery Fees
                                </Box>
                                <Box p={1} className="cart_free">
                                    Free
                                </Box>
                            </Box>
                            <Box className="flex p-3" p={1}>
                                <Box p={1} className="flex-grow inline-flex items-center p-0 cart_flexing">
                                    Coupon Discount
                                </Box>
                                <Box p={1} className="cart_coupon">
                                    Apply Coupon
                                </Box>
                            </Box>

                            <div className="cart_total">
                                <Box className="flex p-3" p={1}>
                                    <Box p={1} className="flex-grow inline-flex items-center p-0 cart_flexing">
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
                    <div className="cart_payments ">
                        <Typography variant="h6" className="cart_gift" gutterBottom>
                            <FontAwesomeIcon icon="gift" />
                            Use Gift Certificate
                        </Typography>
                        <Typography variant="h6" className="font-bold no-underline cart_coupon" gutterBottom>
                            <TextField className="cart_couponcode"  placeholder="Enter Your Gift Certificate Code" inputProps={{ 'aria-label': 'description' }}/>
                            <Button variant="contained" className="cart_button">
                                Apply Gift Certificate
                            </Button>
                        </Typography>
                        <div></div>
                    </div>

                    <Button variant="contained" className="cart_checkout">
                        Proceed To Checkout
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={2} className="pt-4 pb-4 pr-0 pl-0 cart_heads">
                <Grid item xs={12} sm={7} md={7} lg={7} className="bg-white cart_wishlist">
                    <Box p={1} className="font-bold flex cart_banner">
                        <Box p={1} className="flex-grow inline-flex items-center p-3 cart_flexing">
                            <FavoriteBorderIcon />
                            My Wishlist
                        </Box>
                    </Box>
                    
                    <Grid item xs={12} sm={12} md={12} lg={12}  container className="card_paper">
                        <Grid item>
                        <img src={images3.src} alt={images3.alt} />
                        </Grid>

                        <Grid item xs container direction="column" className="cart_datas">
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Apple Watch Series 3 GPS - 38mm Space Grey Aluminium Case with Black Sport Band
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    4.6  
                                </Typography>

                                <Typography variant="body2" className="cart_price" color="textSecondary">
                                    <FontAwesomeIcon icon="rupee-sign" />
                                    1,19,249
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1" className="cart_move">
                                Move To Cart
                            </Typography>
                            <Typography variant="subtitle1" className="cart_moves">
                                Remove <DeleteIcon size="small" />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} container className="card_paper">
                        <Grid item>
                        <img src={images4.src} alt={images4.alt} />
                        </Grid>

                        <Grid item xs container direction="column" className="cart_billing">
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Lenovo Ideapad S145 Intel Core I3 7th Gen Windows 10 Laptop (4GB RAM, 1TB HDD, 15.6 inch, Platinum Grey, 1.85kg)
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    4.6  
                                </Typography>

                                <Typography variant="body2" className="cart_price" color="textSecondary">
                                    <FontAwesomeIcon icon="rupee-sign" />
                                    31,000
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1" className="cart_move">
                                Move To Cart
                            </Typography>
                            <Typography variant="subtitle1" className="cart_moves">
                                Remove <DeleteIcon size="small" />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
            </div>
        </div>
    );
}