import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    function handleBlur() {
        if(!inputValue.includes('@')) {
            alert('Le champ email n\'est pas valide, il manque un @')
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            ></input>
		</footer>
	)  
}




export default Footer