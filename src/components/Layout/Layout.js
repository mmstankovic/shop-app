import { Fragment } from 'react';
import ShopHeader from './ShopHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <ShopHeader cart={props.cart} onShow={props.onShow}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
