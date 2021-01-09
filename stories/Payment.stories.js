import React from "react";
import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import StepLabel from "@material-ui/core/StepLabel";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import './payment.css';
import "react-web-tabs/dist/react-web-tabs.css";
import img1 from './assets/item.png';
import img2 from './assets/bank-logo.png';
const images1 = {
src:img1,
alt:'product1',
};
const images2 = {
src:img2,
alt:'product2',
};
function getSteps() {
    return ["Cart", "Address", "Payment"];
}

export default 
{
	title:'Example/Paymentoffer',
	component:Payments,
};

export const Payments = () =>
{ 
    const steps = getSteps();
    const [activeStep, setActiveStep] = React.useState(2);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
       
        <div>
           

            <div className="p-7 payoff_wrapper">
                <Container maxWidth="lg">
                    <div className="list-combo">
                        <Stepper activeStep={activeStep} alternativeLabel className="list-combo-bg">
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </Container>

                <div className="flex">
                    <div className="p-3 payoff-left">
                        <div className="payoffbox">
                            <div className="discount-payoff-heading">
                                <h3 className="inline-block pt-3 pb-3 pr-12 pl-12 text-base font-medium text-white">Payment Offers</h3>
                            </div>
                            <div className="ml-12 mt-6 pb-8">
                                <ul>
                                    <li>
                                        Flat 30 discount first prepaid transaction using RuPay debit card
                                        <a className="mt-3 font-bold term-payoff" href="#">
                                            T&C
                                        </a>
                                    </li>
                                </ul>
                                <a className="flex" href="#">
                                    Show more <ExpandMoreOutlinedIcon size="small" />
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-6 pl-0">
                                <h3>1.1 Choose Payment Method</h3>
                            </div>
                            <div className="p-3 payoffbox">
                                <div className="flex">
                                    <div className="choospay-leftcon">
                                        <CheckCircleOutlineIcon />
                                    </div>
                                    <div className="choospay-centcon flex">
                                        <div>
                                            <img className="banklogo" src={images2.src} alt={images2.alt} />
                                        </div>
                                        <div className="ml-5 choose-debit-con">
                                            <p className="mt-2">Axis Bank Debit Card</p>
                                            <p className="mt-2">5184 **** **** 1223</p>
                                            <span className="flex mt-5">
                                                <input className="inline-block pt-3 pb-3 pr-7 pl-3 rounded-sm mr-3 w-2/5 payment_cvv1" type="text" id="cvv" placeholder="CVV" name="cvv" />
                                                <Button size="small" variant="contained" className="font-bold mybtn">
                                                    continue
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="choospay-rightcon">
                                        <div>
                                            <p className="payment_color">
                                                <FontAwesomeIcon className="text-sm " icon={faRupeeSign} /> 30 Instant Discount Applicable.
                                                <a href="#" className="ml-1 details-link">
                                                    
                                                    Details
                                                    <ChevronRightIcon />
                                                </a>
                                            </p>
                                            <span className="flex mt-20 justify-end items-center text-base recommend-note">
                                                This card is recommended for you <HelpOutlineOutlinedIcon />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-5 pl-0" >
                                <h3>2.2 Other Payment Methods</h3>
                            </div>
                            <div className="p-7 pl-0 pt-2 pb-2 payoffbox payoff-tab">
                                <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                                    <div className="tab-left21">
                                        <TabList className="myreview-tabs">
                                            <Tab tabFor="vertical-tab-one">
                                                <input className="w-4 h-4 mr-8" type="radio" id="tab1" name="vertical" value="tab1" /> Credit / Debit Card
                                            </Tab>
                                            <Tab tabFor="vertical-tab-two">
                                                <input className="w-4 h-4 mr-8" type="radio" id="tab2" name="vertical" value="tab2" />
                                                Net Banking
                                            </Tab>
                                            <Tab tabFor="vertical-tab-three">
                                                <input className="w-4 h-4 mr-8" type="radio" id="tab3" name="vertical" value="tab3" />
                                                Cash Card
                                            </Tab>
                                            <Tab tabFor="vertical-tab-four">
                                                <input className="w-4 h-4 mr-8" type="radio" id="tab4" name="vertical" value="tab4" />
                                                Wallets
                                            </Tab>
                                            <Tab tabFor="vertical-tab-five">
                                                <input className="w-4 h-4 mr-8" type="radio" id="tab5" name="vertical" value="tab5" />
                                                EMI
                                            </Tab>
                                        </TabList>
                                    </div>

                                    <div className="tab-left22 p-2">
                                        <TabPanel tabId="vertical-tab-one">
                                            <div className="p-0 rounded-sm bg-white">
                                                <label for="Cardnumber">Card Number *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="Cardnumber" name="Cardnumber" placeholder="" />

                                                <label for="cardname">Name on Card *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="cardname" name="cardname" placeholder="" />

                                                <div>
                                                    <label className="absolute mr-10" for="month">
                                                        Expiry Month *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="month" name="month">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <label className="absolute mr-10 " for="year">
                                                        Expiry Year *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="year" name="year">
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="absolute mr-10 " for="lname">
                                                            CVV *
                                                        </label>
                                                        <input className="rounded inline-block mt-8 mt-2 mb-3 mr-0 ml-0 pt-2 pb-2 pr-7 pl-7 payment_cvv" type="text" id="lname" name="lastname" placeholder="" />
                                                        <p className="payment_text"> The last 3 digit printed on the back of the card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel tabId="vertical-tab-two">
                                        <div className="p-0 rounded-sm bg-white">
                                                <label for="Cardnumber">Card Number *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="Cardnumber" name="Cardnumber" placeholder="" />

                                                <label for="cardname">Name on Card *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="cardname" name="cardname" placeholder="" />

                                                <div>
                                                    <label className="absolute mr-10" for="month">
                                                        Expiry Month *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="month" name="month">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <label className="absolute mr-10 " for="year">
                                                        Expiry Year *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="year" name="year">
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="absolute mr-10 " for="lname">
                                                            CVV *
                                                        </label>
                                                        <input className="rounded inline-block mt-8 mt-2 mb-3 mr-0 ml-0 pt-2 pb-2 pr-7 pl-7 payment_cvv" type="text" id="lname" name="lastname" placeholder="" />
                                                        <p className="payment_text"> The last 3 digit printed on the back of the card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel tabId="vertical-tab-three">
                                        <div className="p-0 rounded-sm bg-white">
                                                <label for="Cardnumber">Card Number *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="Cardnumber" name="Cardnumber" placeholder="" />

                                                <label for="cardname">Name on Card *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="cardname" name="cardname" placeholder="" />

                                                <div>
                                                    <label className="absolute mr-10" for="month">
                                                        Expiry Month *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="month" name="month">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <label className="absolute mr-10 " for="year">
                                                        Expiry Year *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="year" name="year">
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="absolute mr-10 " for="lname">
                                                            CVV *
                                                        </label>
                                                        <input className="rounded inline-block mt-8 mt-2 mb-3 mr-0 ml-0 pt-2 pb-2 pr-7 pl-7 payment_cvv" type="text" id="lname" name="lastname" placeholder="" />
                                                        <p className="payment_text"> The last 3 digit printed on the back of the card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabId="vertical-tab-four">
                                        <div className="p-0 rounded-sm bg-white">
                                                <label for="Cardnumber">Card Number *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="Cardnumber" name="Cardnumber" placeholder="" />

                                                <label for="cardname">Name on Card *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="cardname" name="cardname" placeholder="" />

                                                <div>
                                                    <label className="absolute mr-10" for="month">
                                                        Expiry Month *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="month" name="month">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <label className="absolute mr-10 " for="year">
                                                        Expiry Year *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="year" name="year">
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="absolute mr-10 " for="lname">
                                                            CVV *
                                                        </label>
                                                        <input className="rounded inline-block mt-8 mt-2 mb-3 mr-0 ml-0 pt-2 pb-2 pr-7 pl-7 payment_cvv" type="text" id="lname" name="lastname" placeholder="" />
                                                        <p className="payment_text"> The last 3 digit printed on the back of the card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabId="vertical-tab-five">
                                        <div className="p-0 rounded-sm bg-white">
                                                <label for="Cardnumber">Card Number *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="Cardnumber" name="Cardnumber" placeholder="" />

                                                <label for="cardname">Name on Card *</label>
                                                <input className="mt-2 mb-3 mr-0 ml-0 inline-block rounded pt-1 pb-1 pr-6 pl-6 payment_inputs" type="text" id="cardname" name="cardname" placeholder="" />

                                                <div>
                                                    <label className="absolute mr-10" for="month">
                                                        Expiry Month *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="month" name="month">
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                    <label className="absolute mr-10 " for="year">
                                                        Expiry Year *
                                                    </label>
                                                    <select className="mt-8 relative rounded mr-4 mb-2 inline-block pt-3 pb-3 pr-2 pl-2 payment_select" id="year" name="year">
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2031">2031</option>
                                                        <option value="2032">2032</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label className="absolute mr-10 " for="lname">
                                                            CVV *
                                                        </label>
                                                        <input className="rounded inline-block mt-8 mt-2 mb-3 mr-0 ml-0 pt-2 pb-2 pr-7 pl-7 payment_cvv" type="text" id="lname" name="lastname" placeholder="" />
                                                        <p className="payment_text"> The last 3 digit printed on the back of the card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 payoff-right">
                        <div className=" payoffbox-nopadd">
                            <div className="flex justify-between bdboot p-3">
                                <h3 className="font-bold text-base">Order Confirmation</h3>
                                <a href="#" className="font-bold text-sm uppercase edit-link">
                                    
                                    Edit Cart
                                </a>
                            </div>

                            <div className="flex justify-between f-start payoff-right-content p-4 bdboot">
                                <div className="flex">
                                    <div className="img-wrap">
                                        <img src={images1.src} alt={images1.src} className="item-img" />
                                    </div>
                                    <a href="#" className="pro-link ml-5">
                                       
                                        One Plus 8(Glacial Green, 128GB)
                                        <br /> <span>8GB RAM</span>
                                    </a>
                                </div>
                                <span className="font-bold">
                                    <FontAwesomeIcon className="text-xs mr-1" icon={faRupeeSign} /> 59,249
                                </span>
                            </div>

                            <div className="flex justify-between f-start payoff-right-content p-4 bdboot">
                                <div className="flex">
                                    <div className="img-wrap">
                                        <img src={images1.src} alt={images1.alt} className="item-img" />
                                    </div>
                                    <a href="#" className="pro-link ml-5">
                                        
                                        One Plus 8(Glacial Green, 128GB)
                                        <br /> <span>8GB RAM</span>
                                    </a>
                                </div>
                                <span className="font-bold">
                                    <FontAwesomeIcon className="text-xs mr-1" icon={faRupeeSign} /> 59,249
                                </span>
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between">
                                    <span> Delivery Fee</span>
                                    <span className="payment_color">FREE</span>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <span> Coupon Discount</span>
                                    <a href="#" className="coupon-link underline">
                                        Apply Coupon
                                    </a>
                                </div>
                                <div className="flex justify-between mt-4 mb-3">
                                    <h3> Total Amount </h3>
                                    <h3>
                                        <FontAwesomeIcon icon={faRupeeSign} /> 1,06,600
                                    </h3>
                                </div>
                                <div>
                                    <hr className="dotline"></hr>
                                </div>

                                <div className="font-bold border-transparent rounded-sm save-note p-3 mt-3">You will save 4,000 on this order</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}