import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Style from './Checkout.module.scss';
import lozad from 'lozad';
import DeliveryDetails from '../delivery-details';
import FloatingCart from './floating-cart';
import EmptyCart from './cart-empty';
import ProductOverview from './ProductOverview';

export default function Checkout(){

  const dataStore = useSelector(state => state);
  const cartStore = dataStore.cart;
  //lazy loading images for better performance
  const observer = lozad();
  useEffect(() => {
    observer.observe();
  }, [observer, dataStore]);

  return(
    <div className='row'>
      {cartStore && cartStore.items && cartStore.items.length ? (
        <>
        <div className='col-xl-8 col-lg-8 col-md-12 col-12'>
          <div className={Style.cartItemsOverview}>
              <DeliveryDetails/>
              {cartStore.items.map(item => <ProductOverview product={item} key={item.skuId}/>)}
          </div>
        </div>
        <div className='col-xl-4 col-lg-4 col-md-12 col-12'>
          <FloatingCart items={cartStore.items}/>
        </div>
        </>
      ) : <EmptyCart/>}
    </div>
  )
}
