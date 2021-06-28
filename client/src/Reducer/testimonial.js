const testimonials = (testimonials=[], action)=>{
    switch(action.type){
        case 'LOAD_TESTIMONIALS':
            return action.payload;
        default:
            return testimonials;
    }
}

export default testimonials;