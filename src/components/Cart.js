import '../styles/Cart.css';
import { useState } from 'react';

const Cart = () => {
    const monsteraPrice = 8;
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    console.log('isOpen:', isOpen);
    console.log('setIsOpen:', setIsOpen);
    
    return isOpen ? (
        <div className="lmj-cart">
            <button
                className='lmj-cart-toggle-button'
                onClick={()=> setIsOpen(false)}
            >
                Fermer le panier
            </button>
            <h2>Panier</h2>
            <div>
                Monstera : { monsteraPrice } € 
                <button 
                className="lmj-cart-add-button"
                onClick={() => updateCart(cart + 1)}
                >
                    Ajouter
                </button>
            </div>
            <h2>Total = { monsteraPrice * cart} €</h2>
            <button onClick={()=> updateCart(0)}>Vider le panier</button>
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