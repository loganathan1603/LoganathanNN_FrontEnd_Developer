class ShoppingCart{

  getPriceBreakDown = (cart) => {
    const priceDetails = {
      savings: 0,
      totalProductPrice: 0,
      deliveryCharge: 0,
      total:0,
    }
    cart.forEach(product => {
      priceDetails.savings += product.discount * product.quantity;
      priceDetails.totalProductPrice += product.sellingPrice * product.quantity;
    })
    priceDetails.total = priceDetails.totalProductPrice + priceDetails.deliveryCharge;
    return priceDetails;
  }

  removeProductFromCart = (cart, productId) => {
    const itemList = cart.filter(item => item.skuId !== productId);
    return itemList;
  }

  addItem = (cart, productId) => {
    const itemList = cart.map(item => {
      if(item.skuId === productId){
        item.quantity += 1;
      }
      return item;
    });
    return itemList;
  }

  removeItem = (cart, productId) => {
    const itemList = cart.map(item => {
      if(item.skuId === productId){
        item.quantity -= 1;
      }
      return item;
    });
    return itemList;
  }

  createOrder = (cart) => {
    return {
      items: cart,
      costSummary: this.getPriceBreakDown(cart),
      orderId: new Date().getTime(),
    }
  }

}
const shoppingCart = new ShoppingCart();
export default shoppingCart;
