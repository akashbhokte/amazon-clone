import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ bascket }] = useStateValue();
    // console.log("bascket CO", bascket)

    return (
        <div className='checkout'>
            <div className='checkout_left'>

                {/* <img
                className='checkout_ad'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/EOSS/July9/EOSS-Unrec-Deals-PC-3000._CB632952112_.jpg"
            /> */}
                {
                    bascket?.length == 0 ? (
                        <div>
                            <h2>Your Shopping Bascket is empty</h2>
                            <p>
                                You have no items in your bascket.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout_title'>Your Shopping Bascket</h2>
                            {
                                bascket?.map((itm) => {
                                    return <CheckoutProduct
                                        id={itm.id}
                                        title={itm.title}
                                        image={itm.image}
                                        price={itm.price}
                                        rating={itm.rating}
                                    />
                                })
                            }
                        </div>
                    )
                }
            </div>
            {
                bascket?.length > 0 && (
                    <div className='checkout_right'>
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout