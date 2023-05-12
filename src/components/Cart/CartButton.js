import classes from './CartButton.module.css'

const CartButton = (props) => {
    const numberOfCartItems = props.cart.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)
   
    return (
        <button className={classes['cart-button']} onClick={props.onShow}>
            <span style={{marginRight: '1rem'}}>Your Cart</span>
            <span>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton

