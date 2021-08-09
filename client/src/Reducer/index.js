import { combineReducers } from 'redux';

import user from './user'
import paintings from './paintings'
import projects from './project'
import testimonials from './testimonial'
import shoppingcart from './shoppingcart'
import orders from './order'
import blogs from './blog'

const reducer = combineReducers({user, paintings, projects, testimonials, shoppingcart, orders, blogs});

export default reducer;