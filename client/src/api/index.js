import axios from 'axios'
const URL = "http://localhost:5000";

export const login = (data) => axios.post(`${URL}/user`,data);

export const getPaintings = ()=>axios.get(`${URL}/painting`)

export const createPainting=(data)=>axios.post(`${URL}/painting`, data);

export const createComment = (data)=>axios.post(`${URL}/painting/comment`, data);

export const createProject = (data)=>axios.post(`${URL}/project`,data);

export const getProjects = (data)=>axios.get(`${URL}/projects`);

export const getTestimonials = (data)=>axios.post(`${URL}/testimonial`);