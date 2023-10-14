import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/freshcart-logo.svg"
import { AuthContext } from '../../Context/authantication'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/Cartcontext';
export default function Navbar() {
   
  const {token,setToken} = useContext(AuthContext);
  const {numOfcartitems}= useContext(cartContext);
  const navFunc = useNavigate();



  function logout(){
    localStorage.removeItem('tkn');
    setToken(null);
    navFunc('/login');
  }
  
 
  return <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" >
      <img src={logo} alt='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {token ? <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products" >Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category" >Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands" >Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link position-relative"  to="/cart">Cart  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {numOfcartitems}
    <span className="visually-hidden">unread messages</span>
  </span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/allorders">AllOrders</Link>
        </li>
       </>:""}
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li className='nav-item'>
            <i className='fa-brands me-2 fa-facebook-f'></i>
            <i className='fa-brands me-2 fa-twitter'></i>
            <i className='fa-brands me-2 fa-whatsapp'></i>
            <i className='fa-brands me-2 fa-linkedin'></i>
        </li>
        {token ? <>
          <li className="nav-item">
          <Link className="nav-link " to="/profile">Profile</Link>
        </li>
          <li className="nav-item">
          <span onClick={logout} style={{cursor:'pointer'}}  className="nav-link" >Logout</span>
        </li>
        </>:  <>  <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/register">Register</Link>
        </li></>}
      
       
      
      </ul>
    </div>
  </div>
</nav>

    </>
  
}
