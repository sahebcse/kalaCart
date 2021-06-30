import React,{useState, useEffect} from 'react';
import './App.css';
import Home from '../src/components/Home/Home'
import {BrowserRouter,Switch,Route } from 'react-router-dom'
import About from './components/About/About'
import Testimonial from '../src/components/Testimonial/Testimonial'
import Contact from '../src/components/pages/Contact'
import Artwork from '../src/components/Paintings/Artwork'
import Blog from './components/Blogs/Blog'
import Navbar from './components/Layout/Navbar'
import Login from './components/Auth/Login'
<<<<<<< HEAD
import {getPaintings, getProjects, getTestimonials, getCartItems} from './action/user/user'
import {useDispatch} from 'react-redux'
import ShoppingCart from './components/Shopping/ShoppingCart';
import Checkout from './components/Checkout/Checkout'
=======
import {getAuthData, getPaintings, getProjects, getTestimonials} from './action/user/user'
import {useDispatch} from 'react-redux'
import CreatePainting from './components/Admin/Paintings/createPainting';
import NewProjectInput from './components/Admin/Projects/NewProjectInput';
>>>>>>> 2df0495195c6f71f0eadad223397b68b450433cf

function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(() =>{
        if(user){
          dispatch(getCartItems(user?.result.email))
        }
    },[user])
  useEffect(() => {
    dispatch(getPaintings());
  }, [dispatch])

  useEffect(() =>{
    dispatch(getProjects());
  },[dispatch]);

  useEffect(() =>{
    dispatch(getTestimonials());
<<<<<<< HEAD
  },[dispatch]);
=======
  },[]);
  
  useEffect(()=>{
    //console.log("This runs")
    dispatch(getAuthData());
  }, [])

>>>>>>> 2df0495195c6f71f0eadad223397b68b450433cf


  return(
     <BrowserRouter>
     <Navbar />
     <Switch>
       <Route exact path="/" exact><Home/></Route>
       <Route path="/About" exact><About/></Route>
       <Route path="/Artwork" exact><Artwork/></Route>
       <Route path="/Blog" exact><Blog/></Route>
       <Route path="/Testimonial" exact><Testimonial/></Route>
       <Route path="/Contact" exact><Contact/></Route>
       <Route path="/Login" exact><Login/></Route>
<<<<<<< HEAD
       <Route path="/Cart" exact><ShoppingCart/></Route>
       <Route path="/Checkout" exact><Checkout /></Route>
=======
       <Route path='/admin/painting' exact> <CreatePainting/> </Route>
       <Route path='/admin/project'> <NewProjectInput /> </Route>
>>>>>>> 2df0495195c6f71f0eadad223397b68b450433cf
     </Switch>
    </BrowserRouter>
  );
}

export default App;
