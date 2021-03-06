import axios from 'axios'
const URL = "http://localhost:5000";

const jwtToken=localStorage.getItem('profile');
var parsedToken
if(jwtToken!=null)
{
    parsedToken=JSON.parse(jwtToken).token
}

export const login = (data) => axios.post(`${URL}/user`,data);

export const getUserAddress = (data)=>axios.get(`${URL}/getUserAddress/${data}`);

export const getPaintings = ()=>axios.get(`${URL}/painting`)

export const createPainting=(data)=>axios.post(`${URL}/painting`, data, {
    headers:{
        authorization:'Bearer '+ parsedToken
    }
});

export const createComment = (data)=>axios.post(`${URL}/painting/comment`, data, {
    headers:{
        authorization:'Bearer '+ parsedToken
    }
});

export const createProject = (data)=>axios.post(`${URL}/project`,data, {
    headers:{
        authorization:'Bearer '+ parsedToken
    }
});

export const getProjects = (data)=>axios.get(`${URL}/projects` );

export const getTestimonials = (data)=>axios.get(`${URL}/testimonial`);

export const createTestimonial= (data)=>axios.post(`${URL}/testimonial`, data, {
    headers:{
        authorization:'Bearer '+ parsedToken
    }
})

export const getHits=()=>axios.get(`${URL}/hits`)

export const addToCart = (data)=>axios.post(`${URL}/user/addToCart`, data);

export const getCartAndBoughtItems = (data)=>axios.post(`${URL}/user/getCartAndBoughtItems`,data);

export const deleteCartItems = (data)=>axios.post(`${URL}/user/deleteCartItems`,data);

export const removeItemFromCart = (data)=>axios.post(`${URL}/user/removeItemFromCart`,data);

export const postHit=()=>axios.post(`${URL}/hit`)

export const getClientSecretKey = (data)=>axios.post(`${URL}/user/getClientSecretKey`,data);

export const productOrdered = (data)=>axios.post(`${URL}/user/productOrdered`,data);

export const addPost = (data)=>axios.post(`${URL}/post`, data);

export const getPosts=()=>axios.get(`${URL}/posts`)

export const postUserAddress = (data)=>axios.post(`${URL}/user/setAddress`,data);