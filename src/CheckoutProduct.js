import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, image, rating }) {

    const [{ bascket }, dispatch] = useStateValue();


    const removeFromBascket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASCKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct_image' src={image} alt="" />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>

                <p className='checkoutProduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                return <p>⭐</p>
                            })
                    }
                </div>

                <button onClick={removeFromBascket}>Remove from bascket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct