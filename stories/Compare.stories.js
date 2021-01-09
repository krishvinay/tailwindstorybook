import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { resetIdCounter } from "react-tabs";
import Grid from "@material-ui/core/Grid";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
resetIdCounter();
import './compare.css';
import 'react-tabs/style/react-tabs.css';
import img1 from './assets/compare1.png';
import img2 from './assets/compare2.png';
import img3 from './assets/compare3.png';
import img4 from './assets/compare4.png';
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

export default 
{
	title:'Example/Products',
	component:Compareproduct,
};

export const Compareproduct = () =>
{
	
    return (
       
        <div className="pl-5 pt-5 pr-5 pb-5 pro_head">
        <Tabs defaultIndex={0} className="bg-white bought-tab">
            <TabList className="text-right flex pt-4 pb-4 pr-4 pl-4 mt-0 mb-0 mr-0 ml-0 items-center justify-between border-b-2">
                <div className="compare_header font-semibold ml-9 mr-0 mt-0 mb-0 text-lg">
                    <h4> Compare Similar Products</h4>
                </div>
                <div className="absolute md:mr-0 lg:mr-0 mr-60">
                     <SyncAltIcon />
                </div>
                <div className="brought-item">
                    <Tab>Front Camera</Tab>
                    <Tab>Main Camera</Tab>
                    <Tab>Ram</Tab>
                    <Tab>Battery</Tab>
                    <Tab>Performance</Tab>
                    <Tab>Price</Tab>
                    <p>See all Filter</p>
                </div>
            </TabList>

            <div >
                <TabPanel>
                    <Grid container>
                        <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                               
                     
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                    <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                        4% OFF
                                    </h6>
                                </div>
                                <img className="ml-12" src={images1.src} alt={images1.alt} />
                             
                                
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Samsung Galaxy Note 20 Ultra</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 33,427</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                        
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                       
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                    <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5" >
                                        4% OFF
                                    </h6>
                                </div>

                                <img className="ml-12" src={images2.src} alt={images2.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Iphone 12 Pro</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 1,19,999</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="angle-double-down" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="equals" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                </div>

                                <img className="ml-12" src={images3.src} alt={images3.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">MI 10T 5G</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 34,499</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                </div>

                                <img className="ml-12" src={images4.src} alt={images4.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Realme 7 pro </h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 17,999</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                               
                     
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                    <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5" >
                                        4% OFF
                                    </h6>
                                </div>
                                <img className="ml-12" src={images1.src} alt={images1.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Samsung Galaxy Note 20 Ultra</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 33,427</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                        
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                       
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid item xs={12} sm={3} lg={3}>
                            <div class="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                    <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5" >
                                        4% OFF
                                    </h6>
                                </div>

                                <img className="ml-12" src={images2.src} alt={images2.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Iphone 12 Pro</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 1,19,999</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="angle-double-down" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="equals" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                </div>

                                <img className="ml-12" src={images3.src} alt={images3.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">MI 10T 5G</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 34,499</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid item xs={12} sm={3} lg={3}>
                            <div class="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                </div>

                                <img className="ml-12" src={images4.src} alt={images4.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Realme 7 pro </h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 17,999</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                </TabPanel>
                <TabPanel>
                    <Grid item xs={12} sm={3} lg={3}>
                            <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                               
                     
                                <div className="icon-offers">
                                    <StarIcon fontSize="small" />

                                    <Typography variant="body2" >
                                        4.2
                                    </Typography>
                                    <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5" >
                                        4% OFF
                                    </h6>
                                </div>
                                <img className="ml-12" src={images1.src} alt={images1.alt} />
                                <div className="productdata">
                                    <h6 className="font-semibold text-lg text-left leading-8 pt-5">Samsung Galaxy Note 20 Ultra</h6>
                                    <h5 className="text-left text-md leading-8 font-extrabold">(Gold chrome,256 GB, 8GB RAM) </h5>
                                    <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> 33,427</h4>
                                    <List component="nav" aria-label="contacts">
                                        <ListItem className="listdata">
                                        
                                            <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Front Camera: 16 Mp</p>
                                       
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">Main Camera: 108 Mp,Quad core,Digital Zoom, Auto Flash, Face detection, Touch to focus</p>
                                        </ListItem>
                                        <ListItem className="listdata">
                                           <FontAwesomeIcon icon="angle-double-up" />

                                            <p className="ml-4 font-semibold text-sm leading-8 whitespace-nowrap overflow-hidden overflow-ellipsis">5000 mAH Battery</p>
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Grid>
                </TabPanel>
            </div>
        </Tabs>
    </div>
    );
}