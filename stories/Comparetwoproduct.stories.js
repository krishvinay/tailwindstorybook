import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Select from 'react-select';
import img1 from './assets/comparison2.png';
import img2 from './assets/comparison3.png';
import './comparetwoproduct.css';
const images1 = {
src:img1,
alt:'product1',
};
const images2 = {
src:img2,
alt:'product2',
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



export default 
{
	title:'Example/Comparetwoproduct',
	component:Comparetwoproducts,
};

export const Comparetwoproducts = () =>
{
	
    return (
       
        <div>
         <div>
        <div className="p-4 pt-0 sm:pt-12 md:pt-12 lg:pt-12">
            <Grid container spacing={2} className="compare_title">
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6" className="compare_product" gutterBottom>
                        Comparing
                    </Typography>
                    <Typography variant="subtitle1" className="compare_first" gutterBottom>
                        One Plus 8 (Glacial Green, 128 GB)
                    </Typography>
                    <Typography variant="body1" className="text-center sm:text-left md:text-left lg:text-left" gutterBottom>
                        with items
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <h6><img  src={images1.src} alt={images1.src} /></h6>

                    <Typography variant="subtitle1" gutterBottom>
                        One Plus 8 (Glacial Green, 128 GB)
                    </Typography>

                    <Typography className="text-center compare_price">
                        <FontAwesomeIcon icon="rupee-sign" />
                        1,19,249
                    </Typography>
                    <Typography className="compare_discount">
                        <FontAwesomeIcon icon="rupee-sign" />
                        1,19,249 <span>(4%OFF)</span>
                    </Typography>
                    <Typography className="text-center">
                        <Button variant="contained" className="compare_addtocart" startIcon={<ShoppingCartIcon />}>
                            Add To Cart
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <h6> <img  src={images1.src} alt={images1.src} /></h6>

                    <Typography variant="subtitle1" gutterBottom>
                        Redmi Note 8 Pro(Shadow Black, 128 GB)
                    </Typography>

                    <Typography className="text-center compare_price">
                        <FontAwesomeIcon icon="rupee-sign" />
                        1,19,249
                    </Typography>
                    <Typography className="compare_discount">
                        <FontAwesomeIcon icon="rupee-sign" />
                        1,19,249 <span>(4%OFF)</span>
                    </Typography>
                    <Typography className="text-center compare_adds">
                        <Button variant="contained" className="compare_addtocart" startIcon={<ShoppingCartIcon />}>
                            Add To Cart
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <h6> <img  src={images2.src} alt={images2.src} /></h6>

                    <Typography variant="subtitle1" gutterBottom>
                        Add Product
                    </Typography>

                    <Typography className="text-center compare_price">
                        <br />
                    </Typography>
                    <Typography className="compare_discount"></Typography>
                    <div  className="compare_adds mb-3">
                    <Select options = {options} />
                    </div>
                    <div className="compare_adds mb-3">
                    <Select options = {options1} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <h6> <img  src={images2.src} alt={images2.src} /></h6>

                    <Typography variant="subtitle1" gutterBottom>
                        Add Product
                    </Typography>

                    <Typography className="text-center compare_price">
                        <br />
                    </Typography>
                    <Typography className="compare_discount"></Typography>
                    <div  className="compare_adds mb-3">
                    <Select options = {options} />
                    </div>
                    <div className="compare_adds mb-3">
                    <Select options = {options1} />
                    </div>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="tree">Highlights</TableCell>
                            <TableCell className="tree">
                                <Typography variant="body1" className="compare_page">
                                    Quad camera setup - 64MP (F1.8) main camera + 8MP (F2.2) ultra wide camera + 5MP (F2.2) depth camera + 5MP (F2.4) macro camera | 32MP (F2.0) front camera
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    16.21 centimeters (6.4-inch) Super Amoled - Infinity U cut display, FHD+ capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 404 ppi with 16M color support
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Warranty:</b>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Return:</b> 7 Days Replacement Policy
                                </Typography>
                            </TableCell>
                            <TableCell className="tree">
                                <Typography variant="body1" className="compare_page">
                                    Quad camera setup - 64MP (F1.8) main camera + 8MP (F2.2) ultra wide camera + 5MP (F2.2) depth camera + 5MP (F2.4) macro camera | 32MP (F2.0) front camera
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    16.21 centimeters (6.4-inch) Super Amoled - Infinity U cut display, FHD+ capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 404 ppi with 16M color support
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Warranty:</b>1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Return:</b> 7 Days Replacement Policy
                                </Typography>
                            </TableCell>
                            <TableCell className="tree"></TableCell>
                            <TableCell className="tree"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tree">Varient</TableCell>
                            <TableCell className="tree">
                                <Typography variant="body1" className="compare_page">
                                    <b>Color(2)</b>
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    Comet Blue, Comet White
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Storage(2)</b>
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    64GB,128GB
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Ram(3)</b>
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    3GB,6GB,12GB
                                </Typography>
                            </TableCell>
                            <TableCell className="tree">
                                <Typography variant="body1" className="compare_page">
                                    <b>Color(2)</b>
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    Comet Blue, Comet White
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Storage(2)</b>
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    64GB,128GB
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    <b>Ram(3)</b>
                                </Typography>
                                <Typography variant="body1" className="compare_page">
                                    3GB,6GB,12GB
                                </Typography>
                            </TableCell>
                            <TableCell className="tree"></TableCell>
                            <TableCell className="tree"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Accordion>
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" className="compare_back">
                    <Typography>
                        <AddCircleOutlineIcon className="icons" />
                    </Typography>
                    <Typography>
                        <RemoveCircleOutlineIcon className="iconss" />
                    </Typography>
                    <Typography className="compare_specification">General Features</Typography>
                </AccordionSummary>
                <AccordionDetails className="tableview">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="tree">Sim Size</TableCell>
                                    <TableCell className="tree">Nano Sim</TableCell>
                                    <TableCell className="tree">Nano + Nano</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Sim Type</TableCell>
                                    <TableCell className="tree">Dual Sim</TableCell>
                                    <TableCell className="tree">Dual Sim</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Network Type</TableCell>
                                    <TableCell className="tree">4G VOLTE,4G,3G,2G</TableCell>
                                    <TableCell className="tree">4G VOLTE,4G,3G,2G</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Battery Capacity</TableCell>
                                    <TableCell className="tree">4300 mah</TableCell>
                                    <TableCell className="tree">4300 mah</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Sensors</TableCell>
                                    <TableCell className="tree">Magnetic Induction Sensor,Light Sensor, Proximity Sensor, Gyro, Acceleration Sensor</TableCell>
                                    <TableCell className="tree">Magnetic Induction Sensor,Light Sensor, Proximity Sensor, Gyro, Acceleration Sensor</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Removable Battery</TableCell>
                                    <TableCell className="tree">No</TableCell>
                                    <TableCell className="tree">No</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel2a-content" id="panel2a-header" className="compare_back">
                    <Typography>
                        <AddCircleOutlineIcon className="icons" />
                    </Typography>
                    <Typography>
                        <RemoveCircleOutlineIcon className="iconss" />
                    </Typography>
                    <Typography className="compare_specification">Platform Performance</Typography>
                </AccordionSummary>
                <AccordionDetails className="tableview">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="tree">OS</TableCell>
                                    <TableCell className="tree">Android 10</TableCell>
                                    <TableCell className="tree">Android 10</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Processor</TableCell>
                                    <TableCell className="tree">MediaTek Helio G90T Octo Core 2.05 GHZ</TableCell>
                                    <TableCell className="tree">MediaTek Helio G90T Octo Core 2.05 GHZ</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Ram</TableCell>
                                    <TableCell className="tree">6GB</TableCell>
                                    <TableCell className="tree">8GB</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Graphics</TableCell>
                                    <TableCell className="tree">ARM G76(12nm),405</TableCell>
                                    <TableCell className="tree">ARM Mali G76 MC4 (800 MHz),395</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel3a-content" id="panel3a-header" className="compare_back">
                    <Typography>
                        <AddCircleOutlineIcon className="icons" />
                    </Typography>
                    <Typography>
                        <RemoveCircleOutlineIcon className="iconss" />
                    </Typography>
                    <Typography className="compare_specification">Camera</Typography>
                </AccordionSummary>
                <AccordionDetails className="tableview">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="tree">Primary Camera</TableCell>
                                    <TableCell className="tree">64 MP</TableCell>
                                    <TableCell className="tree">64 MP</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Front Camera</TableCell>
                                    <TableCell className="tree">16 MP</TableCell>
                                    <TableCell className="tree">16 MP</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Flash</TableCell>
                                    <TableCell className="tree">Rear Flash</TableCell>
                                    <TableCell className="tree">Rear Dual LED</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Zoom</TableCell>
                                    <TableCell className="tree">10X</TableCell>
                                    <TableCell className="tree">10X Digital Zoom</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Video Recording</TableCell>
                                    <TableCell className="tree">Full HD,Front Camera:720p at 30 fps,1080p at 30 fps,Rear Camera:1080p at 60 fps,720p at 60 fps,720p at 30 fps,1080p at 30 fps,4K at 30 fps</TableCell>
                                    <TableCell className="tree">Full HD,Front Camera:720p at 30 fps,1080p at 30 fps,Rear Camera:1080p at 60 fps,720p at 60 fps,720p at 30 fps,1080p at 30 fps,4K at 30 fps</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel4a-content" id="panel4a-header" className="compare_back">
                    <Typography>
                        <AddCircleOutlineIcon className="icons" />
                    </Typography>
                    <Typography>
                        <RemoveCircleOutlineIcon className="iconss" />
                    </Typography>
                    <Typography className="compare_specification">Display</Typography>
                </AccordionSummary>
                <AccordionDetails className="tableview">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="tree">Resolution</TableCell>
                                    <TableCell className="tree">Full HD+,2400*1080 Pixels</TableCell>
                                    <TableCell className="tree">Full HD+,2340*1080 Pixels</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Features</TableCell>
                                    <TableCell className="tree"> CINE aspect ratio video recording, UltraShot HDR, Nightscape, AI Scene Detection, RAW Image, Audio Zoom, Audio 3D</TableCell>
                                    <TableCell className="tree"> CINE aspect ratio video recording, UltraShot HDR, Nightscape, AI Scene Detection, RAW Image, Audio Zoom, Audio 3D</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel5a-content" id="panel5a-header" className="compare_back">
                    <Typography>
                        <AddCircleOutlineIcon className="icons" />
                    </Typography>
                    <Typography>
                        <RemoveCircleOutlineIcon className="iconss" />
                    </Typography>
                    <Typography className="compare_specification">Storage</Typography>
                </AccordionSummary>
                <AccordionDetails className="tableview">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="tree">Internal Memory</TableCell>
                                    <TableCell className="tree">64 GB</TableCell>
                                    <TableCell className="tree">64 GB</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Expandable Memory</TableCell>
                                    <TableCell className="tree"> Upto 256 GB</TableCell>
                                    <TableCell className="tree"> Upto 512 GB</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary aria-controls="panel6a-content" id="panel6a-header" className="compare_back">
                    <Typography>
                        <AddCircleOutlineIcon className="icons" />
                    </Typography>
                    <Typography>
                        <RemoveCircleOutlineIcon className="iconss" />
                    </Typography>
                    <Typography className="compare_specification">Connectivity Features</Typography>
                </AccordionSummary>
                <AccordionDetails className="tableview">
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="tree">USB</TableCell>
                                    <TableCell className="tree">Yes,OTG Compatable</TableCell>
                                    <TableCell className="tree">Yes,OTG Compatable</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Wifi</TableCell>
                                    <TableCell className="tree"> Yes,802.11a/b/g/n/ac</TableCell>
                                    <TableCell className="tree"> Yes,802.11a/b/g/n/ac</TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tree">Bluetooth</TableCell>
                                    <TableCell className="tree">
                                        Yes,vv5.0
                                        <Button variant="contained" color="secondary" className="compare_buynow" startIcon={<ShoppingCartIcon />}>
                                            Buy Now
                                        </Button>
                                    </TableCell>
                                    <TableCell className="tree">
                                        Yes,vv5.0
                                        <Button variant="contained" color="secondary" className="compare_buynow" startIcon={<ShoppingCartIcon />}>
                                            Buy Now
                                        </Button>
                                    </TableCell>
                                    <TableCell className="tree"></TableCell>
                                    <TableCell className="tree"></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </div>
        </div>
        </div>
    );
}