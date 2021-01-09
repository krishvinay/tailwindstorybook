import React from "react";
import {Button} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import img1 from './assets/emi_partners.png';
import img2 from './assets/pay_options.jpg';
import './footer.css';
const images1 = {
src:img1,
alt:'product1',
};
const images2 = {
src:img2,
alt:'product2',
};
export default 
{
	title:'Example/Products',
	component:Footer,
};

export const Footer = () =>
{
	
    return (
       
        <div>

        <div className="footer-bottom">
           <div className="footer-cont">
              
                     <div className="flex items-center justify-evenly soc-icon">
                         <div className="inline-block text-center p-4 iconwrp"><YouTubeIcon /></div>
                         <div className="inline-block text-center p-4 iconwrp"><FacebookIcon /></div>
                         <div className="inline-block text-center p-4 iconwrp"><InstagramIcon /></div>
                         <div className="inline-block text-center p-4 iconwrp"><LinkedInIcon /></div>
                     </div>
                
           </div>
           <div className="text-center pt-12 pb-12 footer-newletter">
           
            <h5 className="text-xl font-bold">  Join Our New Letter </h5>
            <Typography variant="body2" display="block" gutterBottom>Subcribe to our newletter to stay updated</Typography>
           
            <div className="flex mt-8 mb-8 newletter-content">
                   <input type="text" placeholder="Put in your mail"></input>
                   <Button variant="contained" color="primary">
                     Subcribe
                   </Button>
            </div>
           
           
           </div>

           <div className="w-3/5 footer-items">

                       <div className="flex justify-between p-8">
                       <div className="add-wrp">
                       <Typography variant="h6" gutterBottom>Support</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Contact Us</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Site map</Typography>
                       <Typography variant="body2" display="block" gutterBottom>One Assist</Typography>
                       </div>
                       <div className="add-wrp">
                       <Typography variant="h6" gutterBottom> Policies</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Terms & Conditions</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Privacy Policy</Typography>
                       <Typography variant="body2" display="block" gutterBottom>About Us</Typography>
                       </div>
                       <div className="add-wrp">
                       <Typography variant="h6" gutterBottom> Shop </Typography>
                       <Typography variant="body2" display="block" gutterBottom>Mobile</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Tablets</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Gadgets</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Televisions</Typography>
                       </div>
                       <div className="add-wrp">
                       <Typography variant="h6" gutterBottom>Care@poorvika</Typography>
                       <Typography variant="body2" display="block" gutterBottom>For online queries</Typography>
                       <Typography variant="body2" display="block" gutterBottom>hello@poorvika.in</Typography>
                       <Typography variant="body2" display="block" gutterBottom>For Store queries</Typography>
                       <Typography variant="body2" display="block" gutterBottom>Support@poorvika.com</Typography>
                       </div>
                       </div>
           </div>

           <Divider className="dir-link"/>

           <div className="w-3/5 pb-20 footer-about-items">

             <div className="flex mt-9 details-wrp">
             <div className="details-left">

             
             <Typography variant="h6" gutterBottom>About Us</Typography>
             <Typography variant="body2" gutterBottom>
               Poorvika is the largest Omni channel retailer for smartphones, tablets and accessories in Asia. The company has set up more than 390 one-stop mobile stores across various cities in Tamil Nadu, Karnataka,
               Maharashtra, Kerala, and Pondicherry where the customers can buy their preferred smartphones at ease.
             </Typography>

             <div className="mt-16">
             <Typography variant="h6" gutterBottom>
               Head Office
             </Typography>
             <Typography variant="body2" display="block" gutterBottom>
               Poorvika Mobiles Pvt Ltd
             </Typography>
             <Typography variant="body2" display="block" gutterBottom>
               Admin Office No.30, Arcot Road,
             </Typography>
             <Typography variant="body2" display="block" gutterBottom>
               Kodambakkam, Chennai- 600 024.
             </Typography>
             </div>
             </div>
             
               <div className="details-right">
               <Typography variant="h6" gutterBottom>
               EMI Partners
               </Typography>
               <img  src={images1.src} alt={images1.src} />

               <div className="about-con">
               <Typography variant="h6" gutterBottom>
               Payment Options
               </Typography>
               <img  src={images2.src} alt={images2.src} />
               </div>
               </div>
              </div>
           </div>

              <div className="text-center p-8 foo-bottom">
                   <Typography variant="subtitle1" gutterBottom>
                   Copyright @ 2020 Poorvika Mobiles Private Limited. All Rights Reserved.
                   </Typography>
               </div>

           </div>
         </div>
    );
}