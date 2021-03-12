import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import '../styles/ShoppingList.css';
import { useState } from 'react';

function ShoppingList({ cart, updateCart }) {
	const [FilteredCategory, setCategory] = useState('');

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currrentPlantAdded = cart.find((plant) => plant.name === name);
		if(currrentPlantAdded) {
			const cartFilterPlantAdded = cart.filter(plant => plant.name !== name);
			updateCart([
				...cartFilterPlantAdded,
				{ name, price, amount: currrentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([ ...cart, { name, price, amount: 1 }])

		}
	}

	return (
		<div className='lmj-shopping-list'>
			
			<div>
				<Categories
					categories={categories}
					FilteredCategory={FilteredCategory}
					setCategory={setCategory}
				/>
			</div>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => (
					!FilteredCategory || FilteredCategory === category ? (
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
					) : null
				))}
			</ul>
		</div>
	)
}

export default ShoppingList