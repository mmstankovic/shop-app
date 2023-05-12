import CartItem from './CartItem'
import Card from '../UI/Card'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = props.cart.map((item) => <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={props.onRemove.bind(null, item.id)} onAdd={props.onAdd.bind(null, item)} />)
    const totalAmount = props.cart.reduce((currentNum, item) => {
        return currentNum + item.price * item.amount
    }, 0)                                 
    
    return (
        <Card className={classes.cart}>
            <h3>Cart</h3>
             <ul>    
                {cartItems}
            </ul>
            <h3>Total Amount: $ {totalAmount.toFixed(2)}</h3>
        </Card>   
    )
}
export default Cart