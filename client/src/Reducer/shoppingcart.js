const shoppingcart = (shoppingcart=[], action)=>{
    switch(action.type){
        case 'LOAD_SHOPPINGCART':
            return action.payload;
        case 'ADD_TO_CART':
            return [...shoppingcart, action.payload];
        case 'DELETE_CART':
            return []
        case 'REMOVE_CART_ITEM':
            return shoppingcart.filter((painting)=>painting._id!==action.payload)
        default:
            return shoppingcart;
    }
}

export default shoppingcart;