import '../styles/Cart.css';
import { useState } from 'react';

const Cart = ({ cart, updateCart }) => {
    console.log('cart de cart.js:', cart)
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce((acc, plantType) => 
        acc + plantType.price * plantType.amount, 0
    )
    
    return isOpen ? (
        <div className="lmj-cart">
            <button
                className='lmj-cart-toggle-button'
                onClick={()=> setIsOpen(false)}
            >
                Fermer le panier
            </button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            ))}
            <h2>Total = { total }€</h2>
            <button onClick={()=> updateCart([])}>Vider le panier</button>
        </div>

    ) : (
        <div className='lmj-cart-closed'>
            <button 
            className='lmj-cart-toggle-button'
            onClick={()=>setIsOpen(true)}
            >
                Ouvrir le panier
            </button>
        </div>
    )

}

export default Cart