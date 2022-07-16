import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBascketTotal } from './reducer';


function Subtotal() {
    const [{ bascket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({bascket?.length} items):<strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contains
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBascketTotal(bascket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to checkout</button>

        </div>
    )
}

export default Subtotal