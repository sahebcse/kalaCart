const testimonials = (testimonials=[], action)=>{
    switch(action.type){
        case 'LOAD_TESTIMONIALS':
            return action.payload;
        case 'CREATE_TESTIMONIAL':
            return [...testimonials, action.payload];
        default:
            return testimonials;
    }
}

export default testimonials;