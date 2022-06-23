import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import logo from '../images/logo.png';
import './Style/navbar.css'
const Navbar = () => {
   const [cart, setCart] = useContext(CartContext);
   return (
      <nav class="navbar navbar-expand-lg bg-light">
         <div class="container-fluid">
           <Link to="/"> <a class="navbar-brand logo" href="#"><img src={logo} alt="" /></a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <Link to="/cart"> <a class="nav-link disabled"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
                     </svg> <span>{cart.length}</span></a></Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )


};

export default Navbar;