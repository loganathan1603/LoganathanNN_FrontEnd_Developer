import { Link } from "react-router-dom";
import Style from './Header.module.scss';
import {useSelector} from 'react-redux';

export default function Header() {

  const appStore = useSelector((state) => state);
  const shoppingCart = appStore.cart;
  return (
    <div className={Style.block}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-sm-6 col-6'>
            <Link to='/' className={Style.logo}>
              <img src='./logo.svg' alt='logo'/>
            </Link>
          </div>
          <div className={`col-lg-4 col-sm-6 col-6 ${Style.iconContainer}`}>
            <Link to='/account' className={Style.icon}>
              <img src='./account.svg' alt='My account'/>
              <span>
              {appStore &&
                appStore.user && appStore.user.username ? 'Account' : 'Sign in'}
              </span>
            </Link>
            <Link to='/checkout' className={Style.icon}>
              <img src='./cart.svg' alt='Cart'/>
              {shoppingCart &&
                shoppingCart.hasOwnProperty('items') && shoppingCart.items.length > 0 &&
                (<span className={Style.cartItems}>{shoppingCart.items.length}</span>)
              }
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
