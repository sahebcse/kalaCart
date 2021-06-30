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
import {getPaintings, getProjects, getTestimonials, getCartItems} from './action/user/user'
import {useDispatch} from 'react-redux'
import ShoppingCart from './components/Shopping/ShoppingCart';
import Checkout from './components/Checkout/Checkout'

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
  },[dispatch]);


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
       <Route path="/Cart" exact><ShoppingCart/></Route>
       <Route path="/Checkout" exact><Checkout /></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
