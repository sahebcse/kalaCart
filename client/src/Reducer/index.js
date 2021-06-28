import { combineReducers } from 'redux';

import user from './user'
import paintings from './paintings'
import projects from './project'
import testimonials from './testimonial'

const reducer = combineReducers({user, paintings, projects, testimonials});

export default reducer;