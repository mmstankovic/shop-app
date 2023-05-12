import { useState } from "react"
import classes from './ProductsFilter.module.css'

const ProductsFilter = (props) => {
    const [inputValue, setInputValue] = useState('')

    const changeFilterHandler = e => {
        setInputValue(e.target.value) 
    }
    
    const submitFilterHandler = (e) => {
        e.preventDefault()

        props.filterByCategory(inputValue)
    }

    return (
        <form className={classes['filter-form']} onSubmit={submitFilterHandler}>
            <label>Select by category:</label>
            <select value={inputValue} onChange={changeFilterHandler}>
                <option value="all">All</option>
                <option value="engine">Engine</option>
                <option value="gearbox">Gearbox</option>
                <option value="filter">Filter</option>
            </select>
            <button type="submit">Search</button>
        </form>
    )
}
export default ProductsFilter