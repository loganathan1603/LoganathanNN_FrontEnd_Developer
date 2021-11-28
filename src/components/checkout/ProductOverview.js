
import {useDispatch} from 'react-redux';
import Style from './Checkout.module.scss';

export default function ProductOverview({product}){

  const dispatch = useDispatch();

  return(
    <div className={Style.productDetails}>
      <div className='row pad-10'>
        <div className={`col-2 ${Style.image}`}>
          <img data-src={`/${product.image}`} className='lozad' alt={product.title}/>
        </div>
        <div className='col-9'>
          <div className={Style.title}>{product.title}</div>
          <div className={Style.manufacturer}>{product.manufacturer}</div>
          <div className='row mar-tp-10'>
            <div className='col-9'>
              Qty:
              <span className={Style.quantityModifier}>
                <span onClick={()=> {dispatch({type:'ADD_PRODUCT_ITEM', productId:product.skuId})}}
                className={Style.button}> + </span>
                <span className={Style.quantity}> {product.quantity} </span>
                <span onClick={()=> {dispatch({type:'REMOVE_PRODUCT_ITEM', productId:product.skuId})}}
                className={`${Style.button} ${product.quantity === 1 ? Style.disabled : ''}`}> - </span>
              </span>
            </div>
            <div className={`col-3 no-pad ${Style.priceLabel}`}>
              ₹ {product.sellingPrice * product.quantity}
            </div>
          </div>
        </div>
        <div className='col-1 pad pad-rt-10 no-pad align-right'>
          <img src='trash.svg'
          onClick={()=> {dispatch({type:'REMOVE_PRODUCT', productId:product.skuId})}}
          className={Style.removeProduct} alt='remove product'/>
        </div>
      </div>
    </div>
  )
}
