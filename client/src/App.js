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
import {getPaintings, getProjects, getTestimonials} from './action/user/user'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPaintings());
  }, [])

  useEffect(() =>{
    dispatch(getProjects());
  },[]);

  useEffect(() =>{
    dispatch(getTestimonials());
  },[]);



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
     </Switch>
    </BrowserRouter>
  );
}

export default App;
