import React from 'react'
import './Footer.css'
import footer_logo from '../Assest/logo_big.png'
import instagram_icon from '../Assest/instagram_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'
import printest_icon from '../Assest/pintester_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-conatainer">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-conatainer">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-conatainer">
                    <img src={printest_icon} alt="" />
                </div>
            </div>
            <div className="footer-copywright">
                <hr />
                <p>Copywright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer