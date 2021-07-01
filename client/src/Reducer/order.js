const orders = (orders=[], action)=>{
    switch(action.type){
        case 'LOAD_ORDERS':
            return action.payload;
        case 'ORDER_PRODUCT':
            return [...orders,...action.payload]
        default:
            return orders;
    }
}

export default orders;