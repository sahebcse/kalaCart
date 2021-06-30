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

export const createTestimonial=(sendData)=> async (dispatch)=>{
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