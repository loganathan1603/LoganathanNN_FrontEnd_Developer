import { combineReducers } from 'redux';
import shoppingCart from '../ShoppingCart';

function ShoppingCartReducer(cart = {} , action){
  switch(action.type){
    case 'ADD_TO_CART':
      if(!cart.hasOwnProperty('items')){
        cart.items = [];
      }
      const item = action.product;
      item.quantity = 1;
      cart.items.push(item);
      break;
    case 'REMOVE_PRODUCT':
      cart.items = shoppingCart.removeProductFromCart(cart.items, action.productId);
      break;
    case 'ADD_PRODUCT_ITEM':
      cart.items = shoppingCart.addItem(cart.items, action.productId);
      break;
    case 'REMOVE_PRODUCT_ITEM':
      cart.items = shoppingCart.removeItem(cart.items, action.productId);
      break;
    case 'SUBMIT_ORDER':
      if(!cart.hasOwnProperty('orders')){
        cart.orders = [];
      }
      cart.orders.push(shoppingCart.createOrder(cart.items));
      cart.items = [];
      break;
    default :
      //to handle next actions
  }
  return {...cart};
}

function UserAuthenticationReducer(user = {}, action){
  switch(action.type){
    case 'LOGIN':
      user = action.payload;
      user.password = null;
      break;
    case 'LOGOUT':
      user = {};
      break;
    default :
  }
  return {...user};
}

export default function AppReducers(){
  return combineReducers({
    cart: ShoppingCartReducer,
    user: UserAuthenticationReducer
  });
}
