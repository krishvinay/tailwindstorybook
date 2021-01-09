import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './myorder.css';
import img1 from './assets/order-image-1.png';
import img2 from './assets/order-image-2.png';
const images1 = {
src:img1,
alt:'product1',
};
const images2 = {
src:img2,
alt:'product2',
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default {
  title: 'Example/MyOrder',
  component: MyOrderOffer,
  
};
export const MyOrderOffer = () =>
 {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="mt-10">
                <Container maxWidth="lg">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ">
                            <ArrowBackIosIcon className="text-base" />
                            <h2 className="font-medium text-lg">My Orders</h2>
                        </div>
                        <div>
                            <div className="flex items-center srch">
                                <div className="items-center flex ml-2">
                                    <SearchIcon />
                                    <InputBase placeholder="Search all orders" />
                                </div>
                                <Button className="text-white bg-black rounded-one border-transparent">Search</Button>
                            </div>
                        </div>
                    </div>
                </Container>

                <div>
                    <AppBar position="static" className="tabs">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="All Orders" {...a11yProps(0)} />
                            <Tab label="Open Orders" {...a11yProps(1)} />
                            <Tab label="Cancelled Orders" {...a11yProps(2)} />
                            <Tab label="Store Purchases" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>

                    <Container maxWidth="lg">
                        <TabPanel value={value} index={0} className="mt-5 mb-5 mr-0 ml-0 tab-content">
                            <div className="mt-5 mb-5 mr-0 ml-0 rounded-md box">
                                <div className=" pt-2 pb-2 pr-7 pl-2 md:pt-2 md:pb-2 md:pr-2 md:pl-7 lg:pt-2 lg:pb-2 lg:pr-2 lg:pl-7 box-heading">
                                    <Grid container alignItems="center">
                                        <Grid item xs={12} sm={7}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={12} sm={5} lg={3}>
                                                    <Box m={1} display="block" className="text-xs mb-0 col-title">
                                                        Order Placed{" "}
                                                    </Box>
                                                    <Box m={1} display="block" className="whitespace-nowrap text-sm overflow-hidden overflow-ellipsis inline-block w-56">
                                                        19th July 2020
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={6} lg={7}>
                                                    <Box m={1} display="block" className="text-xs mb-0 col-title">
                                                        Shipped To
                                                    </Box>
                                                    <Box m={1} display="flex">
                                                        <span className="whitespace-nowrap text-sm overflow-hidden overflow-ellipsis inline-block w-56">Mohammed,M.K.N Road,Alandhur,Guindy </span>
                                                        <span>
                                                            <ExpandMoreIcon />
                                                        </span>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12} sm={5}>
                                            <Box m={1} display="block" className="order_id m-0 text-left lg:text-right md:text-right">
                                                ORDER # 407-15379-6382117575
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className=" pt-6 pb-6 pr-5 pl-2 md:pt-6 md:pb-6 md:pr-6 md:pl-10 lg:pt-6 lg:pb-6 lg:pr-6 lg:pl-10 box-content">
                                    <Grid container alignItems="center">
                                        <Grid item xs={12} sm={8} md={8} lg={9}>
                                            <Box m={1}>
                                                <Box m={1} className="text-base font-bold ml-0">
                                                    Delivery Expected By 28 July
                                                </Box>
                                            </Box>
                                            <Box m={1}>
                                                <Box m={1} className="order_dispatch ml-0 mb-5" >
                                                    Preparing for dispatch
                                                </Box>
                                            </Box>
                                            <Grid container className="mt-10">
                                                <Grid item xs={12} sm={3} md={2} lg={2}>
                                                    <Box m={1} display="flex" p={1} justifyContent="center">
                                                         <img src={images1.src} alt={images1.alt} />                                                   
                                                       
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={8} md={5} lg={5}>
                                                    <div>
                                                        <h4 className="font-semibold">Redmi Note 8 Pro (Shadow Black,128 GB)</h4>
                                                        <p className="proprice mt-1 font-semibold">
                                                            <FontAwesomeIcon icon={faRupeeSign} /> 1,19,249
                                                        </p>
                                                        <div className="flex mt-1 items-center">
                                                            <Link href="#" className="prolink font-semibold">
                                                                View Order Details
                                                            </Link>
                                                            <ChevronRightIcon />
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4} lg={3}>
                                            <Box m={1} display="flex" flexDirection="column" p={1} className="m-0 p-0 myordbtn-wrap">
                                                <Button size="large" variant="contained" className="track w-full text-sm font-bold  pt-8 pb-8 pr-10 pl-10 capitalize">
                                                    Track Package
                                                </Button>
                                                <Button size="large" variant="contained" className="retrun w-full text-sm font-bold  pt-8 pb-8 pr-10 pl-10">
                                                    Return/Replace Product
                                                </Button>
                                                <Button size="large" variant="contained" className="package w-full text-sm font-bold  pt-8 pb-8 pr-10 pl-10">
                                                    Cancel Order
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <div className="mt-5 mb-5 mr-0 ml-0 rounded-md box">
                                <div className="pt-2 pb-2 pr-7 pl-2 md:pt-2 md:pb-2 md:pr-2 md:pl-7 lg:pt-2 lg:pb-2 lg:pr-2 lg:pl-7 box-heading">
                                    <Grid container alignItems="center">
                                        <Grid item xs={12} sm={7}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={12} sm={5} lg={3}>
                                                    <Box m={1} display="block" className="text-xs mb-0 col-title">
                                                        Order Placed{" "}
                                                    </Box>
                                                    <Box m={1} display="block" className="text-sm whitespace-nowrap overflow-hidden overflow-ellipsis inline-block w-56">
                                                        19th July 2020
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={6} lg={7}>
                                                    <Box m={1} display="block" className="text-xs mb-0 col-title">
                                                        Shipped To
                                                    </Box>
                                                    <Box m={1} display="flex">
                                                        <span className="whitespace-nowrap text-sm overflow-hidden overflow-ellipsis inline-block w-56">Mohammed,M.K.N Road,Alandhur,Guindy </span>
                                                        <span>
                                                            <ExpandMoreIcon />
                                                        </span>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12} sm={5}>
                                            <Box m={1} display="block" className="order_id m-0 text-left lg:text-right md:text-right">
                                                ORDER # 407-15379-6382117575
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="pt-6 pb-6 pr-5 pl-2 md:pt-6 md:pb-6 md:pr-6 md:pl-10 lg:pt-6 lg:pb-6 lg:pr-6 lg:pl-10 box-content">
                                    <Grid container alignItems="center" justify="space-between">
                                        <Grid item xs={12} sm={8} md={8} lg={9}>
                                            <Box m={1}>
                                                <Box m={1} className="text-base font-semibold">
                                                    Delivery Yesterday
                                                </Box>
                                            </Box>
                                            <Grid container className="mt-10">
                                                <Grid item xs={12} sm={3} md={2} lg={2} mx="auto">
                                                    <Box m={1} display="flex" p={1} justifyContent="center">
                                                    <img src={images2.src} alt={images2.alt} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={8} md={5} lg={5}>
                                                    <div className="myord-pri">
                                                        <h4 className="font-semibold">Redmi Note 8 Pro (Shadow Black,128 GB)</h4>
                                                        <p className="proprice mt-1 font-semibold">
                                                            <FontAwesomeIcon icon={faRupeeSign} /> 1,19,249
                                                        </p>
                                                        <div className="flex mt-1 items-center">
                                                            <Link href="#" className="prolink font-semibold">
                                                                View Order Details
                                                            </Link>
                                                            <ChevronRightIcon />
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4} lg={3}>
                                            <Box m={1} display="flex" flexDirection="column" p={1} className="myordbtn-wrap">
                                                <Button size="large" variant="contained" className="track w-full text-sm font-bold  pt-8 pb-8 pr-10 pl-10">
                                                    Track Package
                                                </Button>
                                                <Button size="large" variant="contained" className="retrun w-full text-sm font-bold  pt-8 pb-8 pr-10 pl-10">
                                                    Return/Replace Product
                                                </Button>
                                                <Button size="large" variant="contained" className="package w-full text-sm font-bold  pt-8 pb-8 pr-10 pl-10">
                                                    Cancel Order
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Open Orders
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Cancelled Orders
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Store Purchases
                        </TabPanel>
                    </Container>
                </div>
            </div>
        </div>
    );
}