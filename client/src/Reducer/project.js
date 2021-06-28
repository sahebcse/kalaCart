const project = (projects=[], action)=>{
    switch(action.type){
        case 'LOAD_PROJECTS':
            return action.payload;

        case 'CREATE_PROJECT':
            return [...projects,action.payload];

        default:
            return projects;
    }
}

export default project;