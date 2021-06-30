const user = (state={authData:null},action) => {
    switch(action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action.payload}));
            return {...state, authData:action.payload};
        
        case "LOGOUT":
            localStorage.clear()
            return {...state, authData:null};

        case "LOAD_AUTHDATA":
            console.log("THe action payload is :")
            console.log(action.payload)
            return {...state, authData:action.payload};
        
        default: 
        return state;
    }
}

export default user