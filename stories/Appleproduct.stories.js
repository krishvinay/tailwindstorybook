import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { resetIdCounter } from "react-tabs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppleIcon from "@material-ui/icons/Apple";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
resetIdCounter();
import 'react-tabs/style/react-tabs.css';
import './apple.css';
import img1 from './assets/apple1.png';
import img2 from './assets/apple2.png';
import img3 from './assets/apple3.png';
import img4 from './assets/apple4.png';
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
  component: AppleProduct,
  
};
export const AppleProduct = () =>
 {
    

    return (
        <div className="pl-5 pt-5 pr-5 pb-9 pro_head">
            <Tabs defaultIndex={0} className="bought-tab">
                <TabList className="text-right flex pt-4 pb-4 pr-4 pl-4 mt-0 mb-0 mr-0 ml-0 items-center justify-between border-b-2">
                    <div className="compare_header font-semibold ml-9 mr-0 mt-0 mb-0 text-lg">
                        <h4> More from Apple</h4>
                    </div>
                    <div className="absolute md:mr-0 lg:mr-0 mr-60">
                        <AppleIcon />
                    </div>
                    <div className="brought-item">
                        <Tab>Phone </Tab>
                        <Tab>IMac</Tab>
                        <Tab>AirPods</Tab>
                        <Tab>Apple Watch</Tab>
                        <Tab>Price</Tab>
                        <p>See all products</p>
                    </div>
                </TabList>

                <div>
                    <TabPanel>
                        <Grid container>
                            <Grid item xs={12} sm={3} lg={3}>
                                <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                    <div className="icon-offers">
                                        <StarIcon fontSize="small" />

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                        <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                                    </div>

                                    <img src={images1.src} alt={images1.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Iphone XR 64gb blue</h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(White,256 GB, 8GB RAM) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon={["fas", "rupee-sign"]} /> Rs.36,999</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={3}>
                                <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                    <div className="icon-offers">
                                        <StarIcon fontSize="small" />

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                        <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                                    </div>

                                    <img src={images2.src} alt={images2.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Iphone XR 64 GB</h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(Blue,256 GB, 8GB RAM) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.1,19,999</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={3}>
                                <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                    <div className="icon-offers">
                                        <StarIcon fontSize="small" />

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                    </div>

                                    <img src={images3.src} alt={images3.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Airpods</h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(White) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.1,15,499</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={3}>
                                <div className="text-center pt-5 pb-5 pr-5 pl-5 inner-brought-item">
                                    <div className="icon-offers">
                                        <StarIcon fontSize="small" />

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                    </div>

                                    <img src={images4.src} alt={images4.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Airpods pro </h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(White) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.1,03,999</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
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

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                        <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                                    </div>

                                    <img src={images1.src} alt={images1.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Iphone XR 64gb blue</h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(White,256 GB, 8GB RAM) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.36,999</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
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

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                        <h6  className="share border-transparent font-bold rounded-3xl text-xs pt-2 pb-2 pl-5 pr-5">
                                            4% OFF
                                        </h6>
                                    </div>

                                    <img src={images2.src} alt={images2.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Iphone XR 64 GB</h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(Blue,256 GB, 8GB RAM) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.1,19,999</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
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

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                    </div>

                                    <img src={images3.src} alt={images3.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Airpods</h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(White) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.1,15,499</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
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

                                        <Typography variant="body2" gutterBottom>
                                            4.2
                                        </Typography>
                                    </div>

                                    <img src={images4.src} alt={images4.alt} />
                                    <div className="productdata">
                                        <h6 className="font-semibold text-lg text-left leading-8 pt-5">Apple Airpods pro </h6>
                                        <h5 className="text-left text-md leading-8 font-extrabold">(White) </h5>
                                        <h4 className="text-left text-lg leading-8 font-extrabold"><FontAwesomeIcon icon="rupee-sign" /> Rs.1,03,999</h4>
                                        <List component="nav" aria-label="contacts">
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">High Resolution display</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Fingerprint Scanner</p>
                                            </ListItem>
                                            <ListItem className="listdatas">
                                                <FiberManualRecordIcon />

                                                <p className="ml-3 leading-7 text-base whitespace-nowrap overflow-hidden overflow-ellipsis">Withheadphone Jack</p>
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