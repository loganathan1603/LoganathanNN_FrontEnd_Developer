import Style from './MyOrders.module.scss';
import lozad from 'lozad';
import {useEffect} from 'react';
import DeliveryDetails from '../delivery-details';
import { useSelector} from 'react-redux';
import { Link } from "react-router-dom";

export default function MyOrders(){

  const dataStore = useSelector(state => state);
  const cart = dataStore.cart;

  const observer = lozad();
  useEffect(() => {
    observer.observe();
  }, [observer, dataStore]);


  return(
    <div className={Style.block}>
      <DeliveryDetails type='PROFILE'/>
      <div className={Style.title}>My Orders</div>
      {cart && cart.hasOwnProperty('orders') && cart.orders.length > 0 ? (
        <>
        {cart.orders.reverse().map(order => (
          <div className={Style.card} key={order.orderId}>
            <div className={`${Style.orderNumber} section-title`}>
              Order ID: #{order.orderId}
            </div>
            {order.items.map( product => (
              <div className='row pad-10' key={product.skuId}>
                <div className={`col-2 col-md-2 ${Style.image}`}>
                  <img data-src={`/${product.image}`} className='lozad' alt={product.title}/>
                </div>
                <div className='col-6 col-md-8'>
                  <div className={Style.productTitle}>{product.title}</div>
                  <div className={Style.productQuantity}>Qty: {product.quantity}</div>
                </div>
                <div className='col-3 col-md-2 no-pad align-right'>
                  <div className={Style.productPrice}>
                  ₹ {product.sellingPrice * product.quantity}
                  </div>
                </div>
              </div>
            ))}
            <div className={Style.orderSummary}>
              <div className={Style.title}> Order Summary</div>
              <div className='row'>
                <div className={`${Style.label} col-8 col-md-4`}>
                  Product cost (incl GST):
                </div>
                <div className={`${Style.label} col-4 col-md-8`}>
                  ₹ {order.costSummary.totalProductPrice}
                </div>
              </div>
              <div className='row'>
                <div className={`${Style.label} col-8 col-md-4`}>
                  Total savings:
                </div>
                <div className={`${Style.label} col-4 col-md-8`}>
                  ₹ {order.costSummary.savings}
                </div>
              </div>
              <div className='row'>
                <div className={`${Style.label} col-8 col-md-4`}>
                  Delivery:
                </div>
                <div className={`${Style.label} col-4 col-md-8`}>
                  ₹ {order.costSummary.deliveryCharge}
                </div>
              </div>
              <div className='row'>
                <div className={`${Style.label} col-8 col-md-4`}>
                  <b>Total:</b>
                </div>
                <div className={`${Style.label} col-4 col-md-8`}>
                  <b>₹ {order.costSummary.total}</b>
                </div>
              </div>
            </div>
          </div>
        ))}
        </>
      ) : (<>
          You don't have any open orders.
          Discover our world class <Link to='/'>products</Link> to choose one from.
        </>)}
    </div>
  )
}
