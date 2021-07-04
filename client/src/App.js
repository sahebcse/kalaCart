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
import {getPaintings, getProjects, getTestimonials, getCartAndBoughtItems, getAuthData} from './action/user/user'
import {useDispatch} from 'react-redux'
import ShoppingCart from './components/Shopping/ShoppingCart';
import Checkout from './components/Checkout/Checkout'
import CreatePainting from './components/Admin/Paintings/createPainting';
import NewProjectInput from './components/Admin/Projects/NewProjectInput';
import PaintingExpanded from './components/Paintings/painting/PaintingExpanded'
import { loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/Orders/Order'

const promise = loadStripe("pk_test_51J8GAsSH4Sh8XwNi3Gw7LEGc44TQTY63b8VdJP4D3fHL30bpHIJKlhL7BKcxex80KPwDZg08Adywy5WTeKLZbngP00FQwvXLWv")

function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(() =>{
        if(user){
          dispatch(getCartAndBoughtItems(user?.result.email))
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
  
  useEffect(()=>{
    //console.log("This runs")
    dispatch(getAuthData());
  }, [])



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
       <Route path="/Checkout" exact>
         <Elements stripe={promise}>
          <Checkout />
         </Elements>
        </Route>
        <Route path='/painting/:id' exact>
          <PaintingExpanded />
        </Route>
       <Route path='/admin/painting' exact> <CreatePainting/> </Route>
       <Route path='/admin/project'> <NewProjectInput /> </Route>
       <Route path='/Orders'> <Orders /> </Route>
       
     </Switch>
    </BrowserRouter>
  );
}

export default App;
