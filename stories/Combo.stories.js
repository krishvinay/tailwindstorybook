import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { Star, Add, DragHandle,} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import proimg from './assets/comb-img.png';
import './combo.css';
const ComboOfferDetails = [
    { id: "501631", image: proimg, name: "One Plus 8 (Glacial Green, 128 GB)", rating: "4.6", price: 45249, oldPrice: 56676, isChecked: true },
    { id: "501632", image: proimg, name: "One Plus Wireless Z Earphones", rating: "4.6", price: 3249, isChecked: true },
    { id: "501633", image: proimg, name: "One Plus Bullets Case (Red Matte)", rating: "3.2", price: 1249, isChecked: false },
];
export default 
{
	title:'Example/Products',
	component:Combooffers,
};

export const Combooffers = () =>
{
	
    return (
       
        <div className="pro_head">
            <div className="p-5">
                <div className="shad12">
                    <div className="bg-white">
                       
                        <div className="p-3 combo-tit">
                        <h6 className="font-semibold text-lg">Buy Together Combo Offers</h6>
                        </div>

                        <div >
                            <div className="md:flex lg:flex inline">
                                <div className="left-content">
                                    <div className="md:flex lg:flex inline justify-between">
                                    {ComboOfferDetails.map((item, index) => (
                                        <div className="p-4 itemscombo">
                                            <div className="relative">
                                                <div className="flex items-center justify-between">
                                                    <Checkbox label="" defaultChecked={item.isChecked} />
                                                    <span className="flex items-center"><Star /> {item.rating}</span>
                                                </div>
                                                <div className="items-center text-center">
                                                    <div className="bg-white absolute rounded-3xl text-center leading-10  addPos"><Add style={{ fontSize: 24 }} /></div>
                                                    <img className="inline" src={item.image} alt="" />
                                                </div>
                                                <div>
                                                    <h4>{item.name}</h4>
                                                    <p className="price-rang"> &#8377; {item.price} {(item.oldPrice) ? (<><span className="font-medium line-through oldPrice">&#8377; {item.oldPrice}</span></>) : null} </p>
                                                    {(item.oldPrice) ? (<><p className="savePrice">Save Rs. {item.oldPrice - item.price} ({Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% OFF) </p></>) : (<><p className="savePrice">Buy Together for Rs.999</p></>)}
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                    </div>

                                </div>
                                <div className="relative text-center right-content">
                                     <DragHandle className="dragHandle" />
                                     <h3 style={{ background: '#3da266', padding: 12}}>Offer Summary</h3>
                                     <h4>Total Cart Value <span className="strike">&#8377; 48,498</span></h4>
                                     <p>Buy Together at </p>
                                     <p>38,498</p>
                                     <p>You save 10,000 <span className="block">on 2 Items</span></p>
                                     <Button variant="contained">Add to Cart</Button>
                                </div>
                            </div>




                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}