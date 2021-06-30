import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../static/img/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone'
import { useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'
const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [isActive, setActive] = useState(false);
  const openSidebar = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
    setUser(null);
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
        <div className="hidden ml-[10%] md:flex uppercase tracking-widest gap-7 justify-between cursor-pointer">
          <a href="/">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
              Home
            </span>
          </a>
          <a href="/About">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
              About
            </span>
          </a>
          <a href="/Artwork">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
            Artworks
            </span>
          </a>

          <a href="/Blog">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
            Blog
            </span>
          </a>

          <a href="/Testimonial">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
            Testimonial
            </span>
          </a>

          <a href="/Contact">
            <span className="text-black-600 hover:text-brand-700 hover:text-bold">
            Contact
            </span>
          </a>
          {!user?(
          <button className="flex-none px-4 btn bg-green-400 rounded border-black border-2 ">
          <a href="/Login">Login</a>
          </button>):
          (<button className="flex-none px-4 btn bg-red-400 rounded border-black border-2 " onClick={handleLogout}>Logout</button>)}

            <Button onClick={()=>history.push('/Cart')}>
              <ShoppingCartIcon />
            </Button>

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












// function Navbar() {
//     return (
//         <div className="bg-black">


//         </div>
//     )
// }

// export default Navbar




