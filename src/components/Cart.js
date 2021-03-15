import '../styles/Cart.css';
import { useState, useEffect } from 'react';

const Cart = ({ cart, updateCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const total = cart.reduce((acc, plantType) => 
        acc + plantType.price * plantType.amount, 0
    )

    useEffect(()=> {
        document.title = `LMJ: ${total} € d'achats`
    },[total])

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
    
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