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

export const postHit=()=>axios.post(`${URL}/hit`)