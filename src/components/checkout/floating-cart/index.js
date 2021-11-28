
import shoppingCart from '../../../services/ShoppingCart';
import Style from './FloatingCart.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function FloatingCart({items}){
  const priceOverview = shoppingCart.getPriceBreakDown(items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return(
    <>
      <div className={Style.floatingCart}>
        <div className={Style.title}>Shopping cart</div>
        <div className={Style.body}>
          <div className={`${Style.sectionTitle} mar-bt-10`}>Order Summary</div>
          <div className={`row ${Style.priceLabelSection}`}>
            <div className={`col-8`}>
              Total products (incl GST)
            </div>
            <div className={`col-4 align-right`}>
              ₹ {priceOverview.totalProductPrice}
            </div>
          </div>
          <div className={`row ${Style.priceLabelSection}`}>
            <div className={`col-8`}>
              Your savings
            </div>
            <div className={`col-4 align-right`}>
              ₹ {priceOverview.savings}
            </div>
          </div>
          <div className={`row ${Style.priceLabelSection}`}>
            <div className={`col-8`}>
              Delivery charge
            </div>
            <div className={`col-4 align-right`}>
              ₹ {priceOverview.deliveryCharge}
            </div>
          </div>
          <div className={Style.totalCostSection}>
            <div className={`row ${Style.priceLabelSection}`}>
                <div className={`col-8`}>
                  Total
                </div>
                <div className={`col-4 align-right`}>
                  ₹ {priceOverview.total}
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='fixed-bt-mobile'>
        <button className='app-button full-width' onClick={() => {
          dispatch({type: 'SUBMIT_ORDER'});
          navigate('/');
        }}>
          Order now
        </button>
      </div>
    </>
  )
}
