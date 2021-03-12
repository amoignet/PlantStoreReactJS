function Categories({categories, FilteredCategory, setCategory}) {

    return (
        <div className='lmj-categories'>
            <select
                value={FilteredCategory}
                onChange={(e) => setCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value='' >Aucune Sélection</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat} >{cat}</option>
				))}
            </select>
        </div>
    )
}

export default Categories