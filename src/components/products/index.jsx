import { Card } from 'react-bootstrap';
import productsMockUp from '../../mocks/products.json';
import lozad from 'lozad';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Style from './Products.module.scss';

export default function Products(){

  //lazy loading images for better performance
  const observer = lozad();
  const dataStore = useSelector(state => state);

  useEffect(() => {
    observer.observe();
  }, [observer, dataStore.cart]);

  return(
    <div className='row'>
      {productsMockUp.map((item, index) =>
        (
          <div key={index}>
            <div className={Style.categoryName}>{item.category}</div>
            <div className='row'>
              {item.products.map(product => (
                <div className='col-xl-3 col-lg-4 col-md-6 col-12 mr-bt-20' key={product.skuId}>
                  <ProductItem product={product} store={dataStore}/>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}

function ProductItem({product, store}){
  const [isProductAddedToCart, setProductAvailabilityInCart] = useState(false);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({type:'ADD_TO_CART', product});
  }

  useEffect( () => {
    const cart = store.cart;
    if(cart && cart.hasOwnProperty('items')){
      cart.items.forEach(item => {
        if(item.skuId === product.skuId){
          setProductAvailabilityInCart(true);
          return false;
        }
      });
    }
  }, [isProductAddedToCart, store])

  return(
    <Card style={{ width: '18rem' }} style={{width:'100%'}}>
      <img className='lozad' data-src={`/${product.image}`} alt={product.title}/>
      <Card.Body>
        <Card.Title>
          <span className={Style.productTitle}>{product.title}</span>
        </Card.Title>
        <Card.Text>
          <span className={Style.priceSection}>
            {product.discount > 0 &&
               <span className={Style.highlightPrice}>₹ {product.sellingPrice}</span>}
            <span>MRP</span>
            <span>{product.actualPrice} /-</span>
          </span>
          <span className={Style.rating}>
            {product.rating}/5
            <img src='./rating.svg' className={Style.icon} alt='rating icon'/>
          </span>
        </Card.Text>
        <button className={`app-button ${isProductAddedToCart && 'disabled'}`} onClick={() => addToCart(product)}>
          {isProductAddedToCart ? 'Added to cart' : 'Add to cart'}
          <span className='selected'></span>
        </button>
      </Card.Body>
    </Card>
  )
}
