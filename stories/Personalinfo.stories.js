import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './personalinfo.css';
import "react-web-tabs/dist/react-web-tabs.css";
import img1 from './assets/Avatar-myreview.png';
import img2 from './assets/Mastercard_logo.png';
import img3 from './assets/VISA-card.png';
import img4 from './assets/my-orders.png';
import img5 from './assets/oder-tv.png';

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
const BootstrapInput = withStyles((theme) => ({}))(InputBase);
    const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
    )
export default 
{
	title:'Example/Personalinfo',
	component:Personalinformation,
};

export const Personalinformation = () =>
{ 
    
    const [showResults, setShowResults] = React.useState(false)
     const onClick = () => setShowResults(true)
    return (
       
        <div>
            <div>
                <Container maxWidth="lg">
                    <Grid container className="mt-8 ">
                    <Grid item lg={4}>
                       <div className="myreview-avatar flex ">
                         <img src={images1.src} alt={images1.alt} />
                        <div className="ml-5 mt-3">
                        <p>Hello,</p>     
                        <h2>Vivek jose</h2>
                       </div>
                       </div>
                    </Grid>
                    <Grid item lg={8}>
                         <div className="myreview-head">
                             <h2 className="text-3xl font-medium">My </h2>
                             <h2 className="text-3xl font-medium">Reviews</h2>
                         </div>
                    </Grid>
                    </Grid>
                </Container>


                <div className="mt-9 myreview-tabwrp-main">
                      <Grid container className="tabwrp-main-inner">

                      <div className="w-full tabmyreview-main">
                        <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                        

                         <div className="tab-left1">
                             
                        <TabList className="myreview-tab">
                             <div className="myreview-head12 p-7 items-center justify-between flex">
                             <h2> <FontAwesomeIcon className="mt-1" icon="cube" /> My Orders</h2>
                                 <ArrowForwardIosIcon/>
                             </div>
                            <span> Account Setting </span> 
                            <Tab tabFor="vertical-tab-one"> <FontAwesomeIcon icon={["far", "user"]} /> Personal Information</Tab>
                            <Tab tabFor="vertical-tab-two"> <FontAwesomeIcon icon={["far", "credit-card"]} />  My Saved Payment</Tab>
                            <Tab tabFor="vertical-tab-three"> <FontAwesomeIcon icon={["fas", "home"]} />  My Addresses</Tab>
                            <Tab tabFor="vertical-tab-four"> <FontAwesomeIcon icon={["far", "heart"]} />  Wishlist</Tab>
                            <Tab tabFor="vertical-tab-five"> <FontAwesomeIcon icon={["far", "bell"]} />  Notification</Tab>
                            <Tab tabFor="vertical-tab-six"> <FontAwesomeIcon icon={["far", "star"]} />  My Reviews</Tab>
                             <div className="mt-5 mb-9 coupon">
                                 <p>Poorvika Privelege Program</p>
                                 <p>My Points</p>
                                 <p>My Coupons</p>
                                 <p>My Reviews</p>
                             </div>
                    
                        </TabList>
                        </div>
                        
                        <div className="p-9 tab-left2">
                        <TabPanel tabId="vertical-tab-one">
                        <div className="Myreview-order-main">
             <div className="p-4 personal-info-form">
                 <form>
                                <FormControl className="per-addform">
                                    <InputLabel shrink htmlFor="bootstrap-input" className="personal-content">
                                        Name 
                                    </InputLabel>
                                    <p className="absolute font-bold per_edit">Edit</p>
                                    <BootstrapInput className="add_inputs" placeholder="Vivek jose" />
                                </FormControl>


                                <FormControl className="per-addform">
                                    <InputLabel shrink htmlFor="bootstrap-input" className="personal-content">
                                        Mobile Number 
                                    </InputLabel>
                                    <p className="absolute font-bold per_edit">Edit</p>
                                    <BootstrapInput className="add_inputs" placeholder="909023878456" />
                                </FormControl>

                                <FormControl className="per-addform">
                                    <InputLabel shrink htmlFor="bootstrap-input" className="personal-content">
                                        Email id 
                                    </InputLabel>
                                    <p className="absolute font-bold per_edit">Edit</p>
                                    <BootstrapInput className="add_inputs" placeholder="Vivekjose@gmail.com" />
                                </FormControl>
                                <FormControl className="per-addform">
                                     <InputLabel shrink htmlFor="bootstrap-input" className="personal-content">
                                        Password
                                    </InputLabel>
                                     <Button variant="contained" className="writ-btn per-but mt-20">Change Password</Button>
                                </FormControl>

                               
                 </form>
             </div>
        </div>
                        </TabPanel>

                        <TabPanel tabId="vertical-tab-two">
                        <div className="Savedpayment-wrp">
        <div>
        <Accordion className="acc-bor">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
          <div className="flex justify-between save-djj">
          <div className="flex save-right">
            <img src={images2.src} alt={images2.alt}></img>
            <h4>HDFC Bank Credit Card ending in 2480</h4>
          </div>
                <div className="remove-edit-wrp flex items-center">
                    <div className="mr-3 flex items-center mt-1"><DeleteOutlineIcon />Delete</div>
                    <div className="remove-cross mr-3">|</div>
                    <div className="mr-3 flex items-center mt-1"><EditOutlinedIcon/>Edit</div>
                    
                </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="accinner-back">
             <div className="Savecard-number flex justify-between save-djj p12">
                 <div className="savecard-left let-spa"><p>Card Number</p><h4>5129xxxxx343434334</h4></div>
                 <div className="savecard-centr let-spa"><p>NAME ON CARD</p><h4>Vivek jose</h4></div>
                 <div className="savecard-right let-spa"><p>VALIDITY</p><h4>10 / 20</h4></div>
             </div>
        </AccordionDetails>
        </Accordion>
       </div>

       <div className="mt-3">
        <Accordion className="acc-bor">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
          <div className="flex justify-between save-djj">
          <div className="flex save-right">
            <img src={images3.src} alt={images3.alt}></img>
            <h4>Punjab National Bank Debit Card ending in 2112</h4>
          </div>
                <div className="remove-edit-wrp flex items-center">
                    <div className="mr-3 flex items-center mt-1"><DeleteOutlineIcon />Delete</div>
                    <div className="remove-cross mr-3">|</div>
                    <div className="mr-3 flex items-center mt-1"><EditOutlinedIcon/>Edit</div>
                    
                </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="accinner-back">
             <div className="Savecard-number flex justify-between save-djj p12">
                 <div className="savecard-left let-spa"><p>Card Number</p><h4>5129xxxxx343434334</h4></div>
                 <div className="savecard-centr let-spa"><p>NAME ON CARD</p><h4>Vivek jose</h4></div>
                 <div className="savecard-right let-spa"><p>VALIDITY</p><h4>10 / 20</h4></div>
             </div>
        </AccordionDetails>
        </Accordion>
       </div>

       <div className="add-newpayment-wrp mt-3">
           <h1>Add New Payment</h1>
           <p>Amazon accepts major credit and debit cards</p>
           <div className="add-newpayment-btnwrp"> <Button variant="contained" className="">Add New Card</Button> </div>
       </div>


        </div>
                        </TabPanel>

                        <TabPanel tabId="vertical-tab-three">
                        <div className="Savedpayment-wrp">
        <div>
        <Accordion className="acc-bor" defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header" className="acc-info">
          <div className="flex justify-between save-djj">
          <div className="save-right">
            
            <h4>Home</h4>
          </div>
               <div className="remove-edit-wrp flex items-center">
                    <div className="mr-3 flex items-center mt-1"><DeleteOutlineIcon />Delete</div>
                    <div className="remove-cross mr-3">|</div>
                    <div className="mr-3 flex items-center mt-1"><EditOutlinedIcon/>Edit</div>
                    
                </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="accinner-back">
             <div className="Savecard-number save-djj p12 add-new-address">
                 <h3>Vivek Joes</h3>
                 <p>3c,3rd floor,carnival infopark 2, kakkanadd </p>
                 <p>Ernakulam, Kerala - 682026 </p>
                 <p>Mobile : 909238734 </p>
             </div>
        </AccordionDetails>
        </Accordion>
       </div>

       

       <div className="add-newpayment-wrp mt-3">
          <div className="add12-btnwrp"> <Button variant="contained" onClick={onClick}>Addd New Card</Button> </div>
       </div>

       { showResults ? <Results /> : null }


        </div>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-four">
                            <p>Tab 4 content</p>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-five">
                            <p>Tab 5 content</p>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-six">
                        <div>
             
             <div className="flex bott-full p-6">
             <div className="p-6">
                <img src={images4.src} alt={images4.alt}></img>
             </div>
             <div className="mt-4 myreview-orders-right">
                 <p>oppo Enco True Wireless Headset</p>
                 <div className="mb-5 items-center flex">
                     <span>4.6 </span> 
                     <Rating
                     name="customized-empty"
                     className="ml-8"
                     defaultValue={2}
                     precision={0.5}
                     emptyIcon={<StarBorderIcon fontSize="inherit" />}
                     />
                 </div>
                 <h4>More than 5star, best budget mobile in india</h4>
                 <p>I love this one, and this is best in class .no 1 best budget mobile and samsung mobile brand also global and this is best in class .no 1 best budget mobile and samsung mobile brand also global</p>
                 <div className="remove-edit-wrp flex items-center">
                    <div className="mr-3 flex items-center mt-1"><DeleteOutlineIcon />Delete</div>
                    <div className="remove-cross mr-3">|</div>
                    <div className="mr-3 flex items-center mt-1"><EditOutlinedIcon/>Edit</div>
                    
                </div>
             </div>
             </div>
 
               <div>
                  <div className="pt-9 pb-9 Your-title">
                  <h3>Your Order Yet to be Reviewed</h3>
                  </div>
                     <div className=" flex justify-between  items-center p12 boder-full">
                         <div >
                            <div className=" flex items-center">
                                     <div>
                                     <img src={images5.src} alt={images5.alt}></img>
                                     </div>
                                     <div>
                                     <h3>oppo Enco True Wireless Headset</h3>
                                      <div>
                                      <Rating
                                         name="customized-empty"
                                         defaultValue={2}
                                         precision={0.5}
                                         emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                         />
                                      </div>
                                     </div>
                             </div>
                         </div>
                         <div className="mt-5 mr-2"> <Button variant="contained" className="writ-btn">Write Reviewed</Button> </div>
                     </div>
 
                     <div className="p12 flex justify-between items-center  boder-full">
                         <div className="">
                            <div className="flex items-center">
                                     <div className="">
                                     <img src={images5.src} alt={images5.alt}></img>
                                     </div>
                                     <div>
                                     <h3>One Plus Bullets True Wireless Headset</h3>
                                      <div className="mt-4">
                                      <Rating
                                         name="customized-empty"
                                         defaultValue={2}
                                         precision={0.5}
                                         emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                         />
                                      </div>
                                     </div>
                             </div>
                         </div>
                         <div className="order-yet-right mt-5 mr-2"> <Button variant="contained" className="writ-btn">Write Reviewed</Button> </div>
                     </div>
               </div>
         </div>
                        </TabPanel>
                        </div>
                        
                        </Tabs>
                        </div>

                         
                      </Grid>    
                </div>


            </div>
        </div>
    );
}