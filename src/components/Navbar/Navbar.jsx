import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


 export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    // const menuRef = useRef();

    // const dropdown_toogle = (e)=>{
    //     menuRef.current.classList.toggle('nav-menu-visible')
    //     e.target.classList.toggle('open')
    // }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        {/* <img className='nav-dropdown' onClick={dropdown_toogle} src={nav_dropdown} alt="" /> */}
        <ul  className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-logging-cart">
        <Link style={{textDecoration:'none'}} to='/login'><button>loggin</button></Link>
        <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt=''/></Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

