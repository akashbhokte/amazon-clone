import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useStateValue();
    // console.log("basket CO", basket)

    return (
        <div className='checkout'>
            <div className='checkout_left'>

                <img
                    className='checkout_ad'
                    src="https://mudita-53560.web.app/img/checkout.jpg"
                />
                {
                    basket?.length == 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>
                                You have no items in your basket.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout_title'>Your Shopping Basket</h2>
                            {
                                basket?.map((itm) => {
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
                basket?.length > 0 && (
                    <div className='checkout_right'>
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout