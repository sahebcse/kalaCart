const blog = (blogposts=[], action)=>{
    switch(action.type){
        case 'LOAD_POSTS':
            return action.payload;

        case 'CREATE_POST':
            return [...blogposts,action.payload];

        default:
            return blogposts;
    }
}

export default blog;