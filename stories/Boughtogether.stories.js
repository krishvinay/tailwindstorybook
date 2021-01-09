import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { resetIdCounter } from 'react-tabs';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
resetIdCounter();
import 'react-tabs/style/react-tabs.css';
import './bought.css';
import img1 from './assets/product1.png';
import img2 from './assets/product2.png';
import img3 from './assets/product3.png';
import img4 from './assets/product4.png';
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

export default {
  title: 'Example/Products',
  component: Boughtproduct,
  
};
export const Boughtproduct = () =>
 {
    

    return (
        <div className="pl-5 pt-0 pr-5 pb-9 pro_head">
              
              <Tabs defaultIndex={0} className="bought-tab">

               

                <TabList className="text-right flex pt-4 pb-4 pr-4 pl-4 mt-0 mb-0 mr-0 ml-0 items-center justify-between border-b-2">

                    <div className="brought-title">
                    <h4 className="font-semibold text-lg ml-3">Want to Protect your Phone ?</h4>
                    </div>

                <div className="brought-item">
                <Tab>All</Tab>
                <Tab>Cases & Covers</Tab>
                <Tab>Airpods</Tab>
                <Tab>Apple Watch</Tab>
                <Tab>Pouches</Tab>
                </div>

                </TabList>
            
                <div>
                <TabPanel>
                <Grid container>   
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                           <h6 className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                        </div>
                        <img className="ml-12 mt-2" src={images1.src} alt={images1.alt} />
                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">Amazfit Bip S Smartwatch (Black)</p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon={["fas", "rupee-sign"]} className="font-bold mr-1 text-base" /><FontAwesomeIcon icon={["fas", "rupee-sign"]} />16,999 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/><FontAwesomeIcon icon="rupee-sign" />25,499</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> <FontAwesomeIcon icon="rupee-sign" />3,427</h5> 
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                            
                        </div>

                        <img className="ml-12 mt-2" src={images2.src} alt={images2.alt} />
 
                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">MI Smart Tv 32inch (Black) </p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />26,599 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>59,999</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                            
                        </div>

                        <img className="ml-12 mt-2" src={images3.src} alt={images3.alt} />
 

                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">Apple iphone 11Pro </p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />30,999 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>35,999</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                          <div className="icon-offer">
                            <FavoriteBorderIcon />
                            
                        </div>

                        <img className="ml-12 mt-2" src={images4.src} alt={images4.alt} />
 
                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">Apple Watch Series 6 </p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />6,999 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>9,999</strike></span> </h4>  
                        
                         <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        
                        </div>
                    </div>
                </Grid>
                </Grid>
                </TabPanel>
                <TabPanel>
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                           <h6 className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                        </div>

                        <img className="ml-12 mt-2" src={images1.src} alt={images1.alt} />
                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">Amazfit Bip S Smartwatch (Black)</p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />16,999 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>25,499</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        </div>
                    </div>
                </Grid>
                </TabPanel>
                <TabPanel>
                <Grid container>  
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                            <h6 className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                        </div>

                        <img className="ml-12 mt-2" src={images2.src} alt={images2.alt} />
 
                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">MI Smart Tv 32inch (Black) </p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />26,599 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>59,999</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        </div>
                    </div>
                </Grid>
                </Grid>
                </TabPanel>
                <TabPanel>
                <Grid container>     
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                            <h6 className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                        </div>

                        <img className="ml-12 mt-2" src={images3.src} alt={images3.alt} />
 

                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">Apple iphone 11Pro </p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />30,999 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>35,999</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        </div>
                    </div>
                </Grid>
                </Grid>
                </TabPanel>
                <TabPanel>
                <Grid item xs={12} sm={3} lg={3}>
                    <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">

                        <div className="icon-offer">
                            <FavoriteBorderIcon />
                           <h6 className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                        </div>

                        <img className="ml-12 mt-2" src={images4.src} alt={images4.alt} />
 
                        <div className="text-left mt-6 rat-bought">
                        <p className="font-semibold text-lg">Amazfit Bip S Smartwatch (Black)</p>
                        <h4 className="font-bold mt-2 text-lg"><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-1 text-base" />16,999 <span className="ml-4"><strike><FontAwesomeIcon icon="rupee-sign" className="font-bold mr-2 text-base"/>25,499</strike></span> </h4>  
                        <h5>Save <FontAwesomeIcon className="font-bold text-sm" icon="rupee-sign" /> 3,427</h5> 
                        </div>
                    </div>
                </Grid>
                </TabPanel>
                </div>
            </Tabs>
            
        </div>
    );
}