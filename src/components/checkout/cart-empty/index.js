import Style from './EmptyCart.module.scss';
import { Link } from "react-router-dom";
export default function EmptyCart(){
  return(
    <div className={Style.block}>
      <img src='cart-empty.svg' alt='empty cart'/>
      <div className='section-description'>
        Your cart is empty. Visit our <Link to='/'>products page</Link> to explore wide
        varieties of world class products & offers.
        <br/>
        Check your orders <Link to='/account'>here</Link>.
      </div>
    </div>
  )
}
