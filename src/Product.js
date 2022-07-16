import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating }) {
    const [{ bascket }, dispatch] = useStateValue();

    const addToBascket = () => {
        dispatch({
            type: 'ADD_TO_BASCKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        })
    }


    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
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
            </div>
            <img src={image} alt="" />
            <button onClick={addToBascket}>Add to Bascket</button>
        </div>
    )
}

export default Product