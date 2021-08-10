const user = (state={authData:null,userAdress:null},action) => {
    switch(action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action.payload}));
            return {...state, authData:action.payload,userAddress:action.payload?.result.address};
        
        case "LOGOUT":
            localStorage.clear()
            return {...state, authData:null,userAdress:null};

        case "LOAD_AUTHDATA":
            console.log("THe action payload is :")
            console.log(action.payload)
            return {...state, authData:action.payload};
        
        case "POST_USER_ADDRESS":
            return {...state, userAddress:action.payload}
        
        default: 
            return state;
    }
}

export default user