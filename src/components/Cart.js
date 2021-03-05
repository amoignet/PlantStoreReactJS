import '../styles/Cart.css'

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const flowersPrice = 15;
    return(
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { monsteraPrice } € </li>
                <li>Lierre : { lierrePrice } € </li>
                <li>Bouquets de fleurs : { flowersPrice } € </li>
            </ul>
            <h2>Total = { monsteraPrice + lierrePrice + flowersPrice} €</h2>
        </div>
    )

}

export default Cart