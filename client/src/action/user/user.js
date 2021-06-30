import * as api from '../../api/index'

export const getPaintings = ()=> async (dispatch)=> {
    const {data} =await api.getPaintings();
    dispatch({type:'LOAD_PAINTINGS', payload:data});
}

export const createPainting = (sendData)=> async (dispatch)=>{
    const {data} = await api.createPainting(sendData);
    dispatch({type:'CREATE_PAINTING',payload:data})
}

export const createComment = (sendData)=> async (dispatch)=>{
    const {data} = await api.createComment(sendData);
    console.log(data)
    dispatch({type:'CREATE_COMMENT', payload:data});
}

export const createProject = (sendData)=> async (dispatch)=>{
    const {data} = await api.createProject(sendData);
    console.log(data);
    dispatch({type:'CREATE_PROJECT', payload:data});
}

export const getProjects = ()=> async (dispatch)=>{
    const {data} = await api.getProjects();
    dispatch({type:'LOAD_PROJECTS', payload:data});
}

export const getTestimonials = ()=> async (dispatch)=>{
    const {data} = await api.getTestimonials();
    dispatch({type:'LOAD_TESTIMONIALS', payload:data});
}

export const addToCart = (sendData)=> async (dispatch)=>{
    console.log(sendData);
    const {data} = await api.addToCart(sendData);
    console.log(data);
    dispatch({type:'ADD_TO_CART', payload:data});
}

export const getCartItems = (id)=> async (dispatch)=>{
    const {data} = await api.getCartItems({userEmail:id});
    console.log(data);
    dispatch({type:'LOAD_SHOPPINGCART' ,payload:data})
}

export const deleteCartItems = (id)=> async (dispatch)=>{
    await api.deleteCartItems(id);
    console.log('deleted...');
    dispatch({type:'DELETE_CART'});
}

export const removeItemFromCart = (sendData)=> async (dispatch)=>{
    await api.removeItemFromCart(sendData);
    dispatch({type:'REMOVE_CART_ITEM',payload:sendData.paintingId})
}

export const createTestimonial=(sendData)=> async (dispatch)=>{
    console.log('chal raha hai yeh.....')
    const {data}=await api.createTestimonial(sendData)
    console.log(data)
    dispatch({type: 'CREATE_TESTIMONIAL', payload:data})
}

export const getAuthData=()=>  (dispatch)=>{
    const data= JSON.parse(localStorage.getItem('profile'))
    console.log("This is getting dispatched")
    console.log(data)
    dispatch({type: 'LOAD_AUTHDATA', payload: data})
}