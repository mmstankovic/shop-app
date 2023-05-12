import classes from './ShopHeader.module.css';
import CartButton from '../Cart/CartButton';

const ShopHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo Shop</div>
      <CartButton cart={props.cart} onShow={props.onShow}/>
    </header>
  );
};

export default ShopHeader;
