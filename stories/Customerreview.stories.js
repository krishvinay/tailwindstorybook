import React from 'react'
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import Divider from '@material-ui/core/Divider';
import './customerreview.css';
export default {
  title: 'Example/Products',
  component: Customerreview,
  
};
export const Customerreview = () =>
 {
    
    
    return (
        <div className="pl-5 pt-0 pr-5 pb-0 pro_head">

            <div className="bg-white custmer-review-main">
            <div className="flex md:p-4 lg:p-4 p-1 justify-between review-wrp">
                 <div className=" ml-6 flex items-center er12">
                 <StarBorderIcon/>     
                 <h6 className="mb-0 ml-4 text-xl font-bold">  Customer Reviews</h6>
                 </div>
                 <div className="flex items-center er13">
                 <CreateOutlinedIcon/>
                 <h6 className="mb-0 ml-4 text-base font-medium">  Write Product Reviews</h6> 
                </div>
            </div>


            {/* <Typography component="legend">Controlled</Typography> */}

            <div className="flex justify-between rev-mention-wrp">
                <div className="p-10 rev-rating">
                     <div className="p-8 pr-3 flex mb-10 rounded-md rate-cont">
                         <div className="rating-left">
                             <h5 className="font-bold text-lg">  Rating</h5>
                             <h4 className="text-6xl font-bold pl-0 pr-0 p-4">  4.6 <span className="text-base font-medium">Out of 5</span></h4>
                             <h6 className="text-sm font-bold">  35 Ratings 4 Reviews</h6>
                         </div>
                         <div className="flex text-center ml-2 justify-between rating-right">
                             <div className="flex flex-col star-left">
                             
                        
                             </div>
                             <div className="star-right">
                                 <Typography component="legend">75%</Typography>
                                 <Typography component="legend">15%</Typography>
                                 <Typography component="legend">8%</Typography>
                                 <Typography component="legend">2%</Typography>
                                 <Typography component="legend">0%</Typography>
                                 
                            </div>
                         </div>
                        </div>

                        <Divider />

                        <div className="text-center mt-11 review-product">
                            <h6 className="font-weight text-base mb-4"> Write Reviews For This Product</h6>
                            <h5>Share Your Feedback with other customers</h5>

                            <Button variant="contained" color="primary" href="#contained-buttons"> Write Product Review </Button>


                        </div>
                
                </div>
                <div className="p-8 overflow-scroll overflow-x-hidden rev-mentions">
                      <Typography variant="h6" gutterBottom>  Review Mentions <ArrowDropDownIcon/> </Typography>

                      <div className="value">
                            <Link className="p-2">Battery Life</Link>
                            <Link className="p-2">Value For Money</Link>
                            <Link className="p-2">Price Range</Link>
                            <Link className="p-2">Battery Life</Link>
                            <Link className="p-2">Value For Money</Link>
                            <Link className="p-2">Price Range</Link>
                            <Link className="p-2">Battery Life</Link>
                            <Link className="p-2">Value For Money</Link>
                            <Link className="p-2">Price Range</Link>
                            
                      </div>


                      <div className="topreview">
                             <Typography variant="h6" gutterBottom>Top Reviews</Typography>

                             <div className="flex mt-6 justify-between">
                                   <div className="add-cmd">
                                   <div className="flex">
                                   <Avatar className="avaimg" alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                     <div className="ml-3 cmd-title">
                                          <h4>Nikhil</h4>
                                          <h5 className="flex items-center">  reviewed on 15 may 2020 </h5>
                                     </div>
                                   </div>
                                   <div className="mt-10 mb-6 read-cmd">
                                    
                                    <Typography variant="subtitle1" gutterBottom>
                                           More 5 Start, best budget mobile in india
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        I love this one sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                        dignissimos 
                                    </Typography>
                                   </div>
                                   </div>
                                   <div className="flex justify-between like-section">
                                       <ThumbUpOutlinedIcon/>
                                       <ThumbDownAltOutlinedIcon/>
                                   </div>
                             </div>

                             <Divider />
                             <div className="flex mt-6 justify-between">
                                   <div className="add-cmd">
                                   <div className="flex">
                                   <Avatar className="avaimg" alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                     <div className="ml-3 cmd-title">
                                          <h4>Simbu</h4>
                                          <h5 className="flex items-center">  | reviewed on 15 may 2020 </h5>
                                     </div>
                                   </div>
                                   <div className="mt-10 mb-6 read-cmd">
                                   <Typography variant="subtitle1" gutterBottom>
                                           More 5 Start, best budget mobile in india
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        I love this one sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                        dignissimos 
                                    </Typography>
                                   </div>
                                   </div>
                                   <div className="flex justify-between like-section">
                                       <ThumbUpOutlinedIcon/>
                                       <ThumbDownAltOutlinedIcon/>
                                   </div>
                             </div>
                             <Divider />
                             <div className="flex mt-6 justify-between">
                                   <div className="add-cmd">
                                   <div className="flex">
                                   <Avatar className="avaimg" alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                     <div className="ml-3 cmd-title">
                                          <h4>Nayanthara</h4>
                                          <h5 className="flex items-center"> | reviewed on 15 may 2020 </h5>
                                     </div>
                                   </div>
                                   <div className="mt-10 mb-6 read-cmd">
                                   <Typography variant="subtitle1" gutterBottom>
                                           More 5 Start, best budget mobile in india
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        I love this one sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                        dignissimos 
                                    </Typography>
                                   </div>
                                   </div>
                                   <div className="flex justify-between like-section">
                                       <ThumbUpOutlinedIcon/>
                                       <ThumbDownAltOutlinedIcon/>
                                   </div>
                             </div>
                      </div>

                </div>
            </div>
            </div>


        </div>
    );
}