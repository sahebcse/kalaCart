import axios from 'axios'
const URL = "http://localhost:5000";

const jwtToken=localStorage.getItem('profile');
var parsedToken
if(jwtToken!=null)
{
    parsedToken=JSON.parse(jwtToken).token
}

export const login = (data) => axios.post(`${URL}/user`,data);

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

<<<<<<< HEAD
export const getTestimonials = (data)=>axios.post(`${URL}/testimonial`);

export const addToCart = (data)=>axios.post(`${URL}/user/addToCart`, data);

export const getCartItems = (data)=>axios.post(`${URL}/user/getCartItems`,data);

export const deleteCartItems = (data)=>axios.post(`${URL}/user/deleteCartItems`,data);

export const removeItemFromCart = (data)=>axios.post(`${URL}/user/removeItemFromCart`,data);
=======
export const postHit=()=>axios.post(`${URL}/hit`)
>>>>>>> 2df0495195c6f71f0eadad223397b68b450433cf
