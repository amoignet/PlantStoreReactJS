import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	// const categories = plantList.reduce(
	// 	(acc, plant) =>
	// 		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	// 	[]
	// )
	
	function addToCart(name, price) {
		const currrentPlantAdded = cart.find((plant) => plant.name === name);
		console.log('currrentPlantAdded:', currrentPlantAdded)
		if(currrentPlantAdded) {
			const cartFilterPlantAdded = cart.filter(plant => plant.name !== name);
			console.log('cartFilterPlantAdded:', cartFilterPlantAdded)
			updateCart([
				...cartFilterPlantAdded,
				{ name, price, amount: currrentPlantAdded.amount + 1 }
			])
			console.log('cart1:', cart)
		} else {
			updateCart([ ...cart, { name, price, amount: 1 }])
			console.log('cart2:', cart)

		}
	}

	return (
		<div className='lmj-shopping-list'>
			{/* <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul> */}
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
							cart={cart}
							updateCart={updateCart}
						/>
						<button onClick={()=> addToCart(name, price)}>Ajouter au Panier</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList