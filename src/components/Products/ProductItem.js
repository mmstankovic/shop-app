import classes from './ProductItem.module.css'

const ProductItem = (props) => {
    const price = props.price.toFixed(2)

    const addProductToCartHandler = () => {
        props.onAdd({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            amount: 1
        })
    }

    return (
        <li className={classes['product-item']}>
            <div className={classes.content}>
                <h3 className={classes.title}>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <h4>{price} $</h4>
            </div>
            <div className={classes.actions}>
                <button onClick={addProductToCartHandler}>Buy</button>
            </div>
        </li>
    )
}

export default ProductItem