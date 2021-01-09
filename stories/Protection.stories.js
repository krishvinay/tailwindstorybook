import React from "react";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './protection.css';
import img1 from './assets/mycart_protection.png';
const images1 = {
src:img1,
alt:'product1',
};


export default 
{
	title:'Example/Products',
	component:Protections,
};

export const Protections = () =>
{
	
    return (
       
        <div className="pl-4 pt-5 pr-4 pb-0 pro_head">
            <FontAwesomeIcon icon="shield-alt" className="text-xl mr-1 mt-1 ml-4 absolute" />
            <h4 className="ml-12 mb-5 text-xl font-semibold"> Want to Protect Your Phone ? </h4>

            <div className="md:flex lg:flex inline pb-6">
                <div className="p-2">
                    <div className="p-7 relative rounded-md pro-wrp">
                        <Checkbox className="checkwrp" />
                        <div className="flex p-2">
                            <div className=" flex text-center items-center">
                                <img src={images1.src} alt={images1.alt}></img>
                            </div>
                            <div className="ml-4 font-semibold prot-second">
                                <Typography variant="h6" gutterBottom>
                                   
                                    1 Year Accidental, Liquid and Screen Production Plan
                                </Typography>
                                <h5 className="font-extrabold text-base">
                                    <FontAwesomeIcon icon="rupee-sign" className="text-sm mr-1" />
                                    3,847
                                    <span>
                                        <strike>
                                            <FontAwesomeIcon icon="rupee-sign" className="text-sm mr-1 ml-2" />
                                            6,800
                                        </strike>
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <Divider />
                        <div className="readmore">
                            <Typography variant="body2" gutterBottom>
                                Brand authorised ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum <Link className="font-bold">...Read More</Link>
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-7 relative rounded-md pro-wrp">
                        <Checkbox className="checkwrp" />
                        <div className="flex p-2">
                            <div className=" flex text-center items-center">
                            <img src={images1.src} alt={images1.alt}></img>
                            </div>
                            <div className="ml-4 font-semibold prot-second">
                                <Typography variant="h6" gutterBottom>
                                   
                                    1 Year Accidental, Liquid and Screen Production Plan
                                </Typography>
                                <h5 className="font-extrabold text-base">
                                    <FontAwesomeIcon icon="rupee-sign" className="text-sm mr-1" />
                                    3,847
                                    <span>
                                        <strike>
                                            <FontAwesomeIcon icon="rupee-sign" className="text-sm mr-1 ml-2" />
                                            6,800
                                        </strike>
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <Divider />
                        <div className="readmore">
                            <Typography variant="body2" gutterBottom>
                                Brand authorised ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum <Link className="font-bold">...Read More</Link>
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-7 relative rounded-md pro-wrp">
                        <Checkbox className="checkwrp" />
                        <div className="flex p-2">
                            <div className=" flex text-center items-center">
                            <img src={images1.src} alt={images1.alt}></img>
                            </div>
                            <div className="ml-4 font-semibold prot-second">
                                <Typography variant="h6" gutterBottom>
                                    
                                    1 Year Accidental, Liquid and Screen Production Plan
                                </Typography>
                                <h5 className="font-extrabold text-base">
                                    <FontAwesomeIcon icon="rupee-sign" className="text-sm mr-1" />
                                    3,847
                                    <span>
                                        <strike>
                                            <FontAwesomeIcon icon="rupee-sign" className="text-sm mr-1 ml-2" />
                                            6,800
                                        </strike>
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <Divider />
                        <div className="readmore">
                            <Typography variant="body2" gutterBottom>
                                Brand authorised ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum <Link className="font-bold">...Read More</Link>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}