const paintings = (paintings=[], action)=>{
    switch(action.type){
        case 'LOAD_PAINTINGS':
            return action.payload;
        case 'CREATE_PAINTING':
            return [...paintings, action.payload];
        case 'CREATE_COMMENT':
            return paintings.map((painting)=>(painting._id === action.payload._id ? action.payload : painting))
        default:
            return paintings;
    }
}

export default paintings;