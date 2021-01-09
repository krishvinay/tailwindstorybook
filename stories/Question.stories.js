import React from 'react'
import Typography from "@material-ui/core/Typography";
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import { QuestionAnswer } from '@material-ui/icons';
import './question.css';
import img1 from './assets/scel.png';
const images1 = {
    src:img1,
    alt:'product1',
    };
export default {
  title: 'Example/Products',
  component: Questionanswer,
  
};
export const Questionanswer = () =>
 {
    
    
    return (
        <div className="Asknewquestions-wrp">
              <div className="pl-5 pt-10 pr-5 pb-0 pro_head">
                  
                  <div className="flex bg-white askinner">
                  <div className="asklefttab">
                      
                      <div className="flex justify-between items-center p-2 aser">
                          <div className=" flex items-center as12">
                               <MessageOutlinedIcon />
                               <Typography variant="h6" gutterBottom>  Question & Answer</Typography>
                          </div>
                          <div className=" flex items-center as13">
                                 <SearchIcon />
                                 <input  type="text" placeholder="Search for Questions and Answers"/>
                          </div>
                      </div>

                      <div className="row">
                                
                                <div className="flex justify-between items-center p-4 qa-wrap">
                                <div className="ques-ans">
                                    <h4><span >Q </span> <span>:</span> <span>Is this Chinese manufactured phone?</span></h4>
                                    <p><span >A </span> <span>:</span> <span>Yes</span></p>
                                </div>
                                <div className="like-dislike">
                                    <p>By Mohammed</p>
                                    <div className="flex items-center mt-5">
                                    <ThumbUpAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">930</span>
                                    <div className="tuinner"></div>
                                    <ThumbDownAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">229</span>
                                   </div>
                                </div>
                                </div>

                                <div className="flex justify-between items-center p-4 qa-wrap">
                                <div className="ques-ans">
                                    <h4><span >Q </span> <span>:</span> <span>Is this Chinese manufactured phone?</span></h4>
                                    <p><span >A </span> <span>:</span> <span>Yes</span></p>
                                </div>
                                <div className="like-dislike">
                                    <p>By Mohammed</p>
                                    <div className="flex items-center mt-5">
                                    <ThumbUpAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">930</span>
                                    <div className="tuinner"></div>
                                    <ThumbDownAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">229</span>
                                   </div>
                                </div>
                                </div>

                                <div className="flex justify-between items-center p-4 qa-wrap">
                                <div className="ques-ans">
                                    <h4><span >Q </span> <span>:</span> <span>Is this Chinese manufactured phone?</span></h4>
                                    <p><span >A </span> <span>:</span> <span>Yes</span></p>
                                </div>
                                <div className="like-dislike">
                                    <p>By Mohammed</p>
                                    <div className="flex items-center mt-5">
                                    <ThumbUpAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">930</span>
                                    <div className="tuinner"></div>
                                    <ThumbDownAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">229</span>
                                   </div>
                                </div>
                                </div>

                                <div className="flex justify-between items-center p-4 qa-wrap">
                                <div className="ques-ans">
                                    <h4><span >Q </span> <span>:</span> <span>Is this Chinese manufactured phone?</span></h4>
                                    <p><span >A </span> <span>:</span> <span>Yes</span></p>
                                </div>
                                <div className="like-dislike">
                                    <p>By Mohammed</p>
                                    <div className="flex items-center mt-5">
                                    <ThumbUpAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">930</span>
                                    <div className="tuinner"></div>
                                    <ThumbDownAltOutlinedIcon className="thumb-icon" /> 
                                    <span className="count">229</span>
                                   </div>
                                </div>
                                </div>

                                <div className="flex p-4 justify-between qa-see">
                                    

                                    <div className="qa-12">
                                        <Typography variant="h6" gutterBottom>  See all answered questions ( <span className="total-count">233</span>)</Typography>
                                    </div>
                                    <div className="flex items-center qa-13">
                                        <MessageOutlinedIcon />
                                        <Typography variant="h6" gutterBottom>  Ask New Question </Typography>
                                    </div>

                                </div>

                      </div>


                  </div>
                  <div className="askrighttab">
                      <div className="p-2">
                      <Typography variant="h6" gutterBottom>  Customer Images</Typography>
                      </div>

                       <div className="que-img-inner">
                            <div className="float-left ml-5 que-img-item"> <img src={images1.src} alt={images1.alt} /></div>
                            <div className="float-left ml-5 que-img-item"><img src={images1.src} alt={images1.alt} /></div>
                            <div className="float-left ml-5 que-img-item"> <img src={images1.src} alt={images1.alt} /></div>
                            <div className="float-left ml-5 que-img-item"> <img src={images1.src} alt={images1.alt} /></div>
                       </div>


                  </div>
                  </div>


              </div>
        </div>
    );
}