import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import logo from '../../static/img/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Button} from '@material-ui/core'
import { useDispatch, useSelector} from 'react-redux'
import {getAuthData} from '../../action/user/user'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user=useSelector((state)=>state.user.authData)
  //const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [isActive, setActive] = useState(false);
  
  useEffect(()=>
  {
    if (user)
    {
      console.log("We have reached here")
      console.log(user)
    }
    
  },[])

  const openSidebar = () => {
    setActive(!isActive);
  };
  const handleLogout = () => {
    console.log("Logged out")
    dispatch({type: 'LOGOUT'})
    //setUser(null);
  }
  return (
    <header className="z-30 w-full pl-4 md:px-8 py-1 bg-white sm:px-4">
      <div className="flex items-center justify-between px-4">
        <a href="/">
          <span className="flex items-center">
            <img
              src={logo}
              alt="ArtCart Logo"
              className="h-12"
            />

            <span className="text-black-600 hover:text-brand-700 hover:text-bold text-2xl">
              ArtCart
            </span>

          </span>
        </a>
        <div className="hidden ml-[10%] md:flex uppercase tracking-widest gap-1 justify-between cursor-pointer">
          <Link to="/">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
              Home
            </span>
          </Link>
          <Link to="/About">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
              About
            </span>
          </Link>
          <Link to="/Artwork">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
            Artworks
            </span>
          </Link>

          <Link to="/Blog">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
            Blog
            </span>
          </Link>

          <Link to="/Testimonial">
            <span className="text-black-600 hover:text-brand-700 rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
            Testimonial
            </span>
          </Link>

          <Link to="/Contact">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
            Contact
            </span>


          </Link>
          {!user?(<Link to="/Login">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
            Login
            </span>
          </Link>):(<Link><span onClick={handleLogout} className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
            Logout
            </span></Link>)}
            
            {user && (
              <div>
                <span onClick={()=>history.push('/Cart')} className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
                <ShoppingCartIcon />
                </span>
                <span onClick={()=>history.push('/Orders')} className="text-black-600 hover:text-brand-700 hover:text-bold rounded-full py-3 px-6 hover:bg-green-400 hover:text-white">
                <LocalMallIcon />
                </span>
              
              </div>
            )}
          
      
        </div>
      
        <div className="flex items-center px-4">
           
          
          <div className="inline-flex md:hidden">
            <button
              onClick={openSidebar}
              className="flex-none px-2 btn btn-white btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="sr-only">Open Menu</span>
            </button>
          </div>

          <div className="relative flex md:hidden ">
            <div
              className={`${isActive ? '' : 'hidden'
                } fixed inset-0 z-10 w-full h-full  opacity-5`}
              onClick={openSidebar}
            ></div>
            <div
              className={`${isActive ? '' : 'hidden'
                } fixed z-50 w-5/12 h-auto text-black shadow-lg bg-gray-50 rounded-lg right-4 top-14 rounded`}
            >
              <ul className=" ">

                <a href="/">
                  <li className="px-6 py-1 my-2 bg-pink-400 hover:bg-brand-600 hover:text-white rounded-r-full text-right  hover:bg-blue-400 font-bold">
                    Home
                  </li>
                </a>

                <a href="../pages/About/About.js">
                  <li className="px-6 py-1 my-2 bg-gray-300 hover:bg-brand-600 hover:text-white rounded-l-full hover:bg-blue-400 font-bold">
                    About
                  </li>
                </a>

                <a href="/Artwork">
                  <li className="px-6 py-1 my-2 bg-pink-400 hover:bg-brand-600 hover:text-white rounded-r-full text-right hover:bg-blue-400   font-bold">
                  Artworks
                  </li>
                </a>

                <a href="/Blog">
                  <li className="px-6 py-1 my-2 bg-gray-300 hover:bg-brand-600 hover:text-white rounded-l-full hover:bg-blue-400 font-bold">
                  Blog
                  </li>
                </a>

                <a href="/Testimonial">
                  <li className="px-6 py-1 my-2 bg-pink-400 hover:bg-brand-600 hover:text-white rounded-r-full text-right hover:bg-blue-400  font-bold">
                  Testimonial
                  </li>
                </a>                
                 
                <a href="/contact">
                  <li className="px-6 py-1 my-2 bg-gray-300 hover:bg-brand-600 hover:text-white rounded-l-full hover:bg-blue-400 font-bold">
                    Contact
                  </li>
                </a>

                <a href="/Login">
                  <li className="px-6 py-1 my-2 bg-yellow-300 hover:bg-brand-600 hover:text-white rounded-full hover:bg-blue-400 font-bold text-center text-green-800 ">
                    Login
                  </li>
                </a>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;







/*
Legacy Code 
{!user?(
          <button className="flex-none px-4 btn bg-green-400 rounded border-black border-2 ">
          <Link to="/Login">Login</Link>
          </button>):
          (<button className="flex-none px-4 btn bg-red-400 rounded border-black border-2 " onClick={handleLogout}>Logout</button>)} */




// function Navbar() {
//     return (
//         <div className="bg-black">


//         </div>
//     )
// }

// export default Navbar




