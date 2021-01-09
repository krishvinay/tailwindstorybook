import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Checkbox from '@material-ui/core/Checkbox';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import img1 from './assets/set2.png';
import img2 from './assets/realme1.jpeg';
import img3 from './assets/realme2.jpeg';
import img4 from './assets/realme3.jpeg';
import img5 from './assets/realme4.jpeg';
import img6 from './assets/prz-img.png';
import img7 from './assets/pec.png';
import './productdetails.css';
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
    alt:'product5'
}
const images6 = {
    src:img6,
    alt:'product6'
}
const images7 = {
    src:img7,
    alt:'product7'
}


export default 
{
	title:'Example/Products',
	component:Product,
};

export const Product = () =>
{
	
    return (
       
        <div className="product-main-wrp p-9 flex gap-2 ">
                       
                       <div className="product-img">
                        <div className="hert-icon justify-end flex">
                            <FavoriteBorderIcon/>
                       </div>
                       <div className="content-product flex items-center justify-center">
                            <img src={images1.src} alt={images1.alt}></img>
                       </div>

                       <div className="thumb-product border-solid border-gray-300 border flex justify-between">
                           <div className="tumbline-prod border-gray-300 border-r  p-2"><img src={images2.src} alt={images2.alt}></img></div>
                           <div className="tumbline-prod border-gray-300 border-r  p-2"><img src={images3.src} alt={images3.alt}></img></div>
                           <div className="tumbline-prod border-gray-300 border-r  p-2"><img src={images4.src} alt={images4.alt}></img></div>
                           <div className="tumbline-prod border-gray-300 border-r  p-2"><img src={images5.src} alt={images5.alt}></img></div>
                           <div className="tumbline-prod p-2"><img src={images5.src} alt={images5.alt}></img></div> 
                       </div>
                      </div>

                      
                           <div className="prod-detail-main ">
                            <div className="flex gap-5">
                            
                            <div className="product-price">
                            <div className="pr-main-head flex justify-between">
                            <div className="prleft">
                                <p className="text-xs text-gray-400"> Home  <ArrowForwardIosIcon className="arr-icon"/> Mobile &  Accessories <ArrowForwardIosIcon className="arr-icon"/> Mobiles <ArrowForwardIosIcon className="arr-icon"/> Apple Mobiles</p>
                                <h6 className="font-semibold mt-4">OnePlus 8 (Grey Onyx, 256GB) </h6>
                                <span className="text-sm text-gray-400 underline">By OnePlus Store</span>
                            </div>
                            <div className="prright">
                                <div className="point-rate">
                                    <span className="flex text-sm">4.7 <StarIcon/> </span>
                                    <p className="text-sm">279 Reviews</p>
                                </div>
                            </div>
                            </div>

                            <div className="price-pro-details flex items-center mt-2">
                            <h4 className="font-semibold">1,19,249</h4>
                            <h6 className="ml-3 line-through text-gray-400">1,33,576</h6>
                            <h6 className="ml-2">(4%OFF) Save Rs.11,427</h6>
                            </div>

                            <Chip  icon={<CheckCircleIcon/>} color="secondary"  label="In Stock" variant="outlined" className="chip-wrp mt-2 font-bold" />

                            <div className="title-head emi-store flex items-center mt-5 mb-5">
                            <p className="text-sm">EMI Starts at  2,589.No Cost EMI available</p>
                            <a className="ml-3 flex items-center cursor-pointer font-bold text-sm">See EMI Option<KeyboardArrowRightIcon/></a>
                            </div>

                            <div className="storage-wrp"><h6>Color :</h6></div>

                            <div className="thumb-product-product mt-3 flex mb-3 text-center">
                            <div className="imgwrap items-center">
                            <div className="tumb-color border-solid border-gray-300 border border-r-0 p-2 items-center">
                            <img src={images2.src} alt={images2.alt}></img>
                            </div>
                            <p>Glacier Green</p>
                            </div>
                            <div className="imgwrap">
                            <div className="tumb-color border-solid border-gray-300 border border-r-0 p-2 items-center">
                            <img src={images2.src} alt={images2.alt}></img>
                            </div>
                            <p>Magic Glow</p>
                            </div>
                            <div className="imgwrap">
                            <div className="tumb-color border-solid border-gray-300 border border-r-0 p-2 items-center">
                            <img src={images2.src} alt={images2.alt}></img>
                            </div>
                            <p>Sparky Blue</p>
                            </div>
                            
                            <div className="imgwrap">
                            <div className="tumb-color border-solid border-gray-300 border p-2 items-center">
                            <img src={images2.src} alt={images2.alt}></img>
                            </div> 
                            <p>Phonix Blue</p>
                            </div>
                            </div>

                            <div className="storage-wrp mt-3">
                            <h6>Available Offers :</h6>
                            <div className="offerlist mt-3">
                                <ul>
                                    <li>  <img className="absolute" src={images7.src} alt={images7.alt}></img> <p className="relative ml-9">Bank offer Flat 30% discount on first prepaid transaction using Rupay debit cart, minimum order value Rs 750</p></li>
                                    <li>  <img className="absolute" src={images7.src} alt={images7.alt}></img> <p className="relative ml-9">Bank offer 5% Off with Axis Bank Buzz Credit Card</p></li>
                                    <li>  <img className="absolute" src={images7.src} alt={images7.alt}></img> <p className="relative ml-9">Bank offer 5% Off with Axis Bank Buzz Credit Card</p></li>
                                </ul>
                            </div>
                            </div>


                      </div>
                            <div className="product-addcart">
                            <div className="camp-pro-main flex justify-between mb-3">
                            <div className="camp-pro-left flex items-center">
                            <Checkbox /> 
                            <h6>Add to Compare</h6>
                            </div>
                            <div className="camp-pro-right flex items-center">
                            <h6>Share</h6>
                            <ShareOutlinedIcon/>
                            </div>
                            </div>
                            <div className="pricz-order-wrp border-solid border-gray-300 border"> 
                            <List component="nav" aria-label="secondary mailbox folder">
                            <ListItem className="prizc-exchange prize-start">
                            <ListItemIcon className="prizc-checkbox"> 
                            <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}/>
                            </ListItemIcon>
                            <div className="prizc-text gr13 btblack">
                            <p className="font-semibold text-black"> 
                            With Exchange 
                            </p>
                            <h5 className="font-semibold">Up to 29,248.00 off</h5> 
                            </div> 
                            </ListItem> 
                            <Divider/>    
                            <ListItem className="prizc-exchange prize-start">
                            <ListItemIcon className="prizc-checkbox"> 
                            <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}/>
                            </ListItemIcon>
                            <div className="prizc-text btblack">
                            <p className="font-semibold text-black">
                            Without Exchange 
                            </p>
                            <h5 className="font-semibold">29,249,00</h5> 
                            </div> 
                            </ListItem>    
                            <p className="ml-2 font-bold">
                               Buy with Accessories
                            </p>
                            <ListItem className="prizc-exchange prize-start">
                            <ListItemIcon>
                            <Checkbox color="primary" />
                            </ListItemIcon>
                            <div className="priimg">
                            <img src={images6.src} alt={images6.alt}></img>
                            </div>
                            <div className="prizc-text">
                            <ListItemText>
                            Apple Airpads (white)
                            </ListItemText> 
                            <h5 className="font-semibold">29,249,00</h5> 
                            </div>
                            </ListItem>
                            <ListItem className="prizc-exchange">
                            <ListItemIcon>
                            <Checkbox color="primary"/>
                            </ListItemIcon>
                            <div className="priimg">
                            <img src={images6.src} alt={images6.alt}></img>
                            </div>
                            <div className="prizc-text">
                            <ListItemText>
                            Onpluse Bullet Case
                            </ListItemText> 
                            <h5 className="font-semibold">29,249,00</h5> 
                            </div> 
                            </ListItem>
                            <Divider/>
                            <Divider/>
                            <p className="ml-2 mt-4 font-bold">
                            Protect your Phone
                            </p>
                            <ListItem className="prizc-exchange">
                            <ListItemIcon>
                            <Checkbox/>
                            </ListItemIcon>
                            <ListItemText>
                            1 year Accidental Damage plan for 3,799.00
                            </ListItemText> 
                            </ListItem>
                            <ListItem className="prizc-exchange">
                            <ListItemIcon>
                            <Checkbox/>
                            </ListItemIcon>
                            <ListItemText>
                            Acko 1-year Total Damage protection for 3,799.00
                            </ListItemText> 
                            </ListItem>
                            <ListItem>
                            <div className="btn-wrp">
                            <Button variant="contained" className="btn-yellow">
                            <ShoppingCartOutlinedIcon/>  Add To Cart
                            </Button>
                            </div>
                            </ListItem>
                            <ListItem>
                            <div className="btn-wrp">
                            <Button variant="contained" className="btn-black">
                            <FlashOnOutlinedIcon/>  Buy Now
                            </Button>
                            </div>
                            </ListItem>
                            </List>
                            </div>
                            </div> 
                            </div>

                             <div className="setdeliver">
            
                            </div>

                           </div>
                          


        </div>
    );
}