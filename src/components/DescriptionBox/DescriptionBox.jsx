import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>
            Discover a seamless online shopping experience at our e-commerce website, where convenience meets quality. 
            Explore a vast array of products from the comfort of your home, ranging from trendy fashion and electronics to home essentials. 
            Enjoy secure transactions, timely deliveries, and a user-friendly interface that simplifies your shopping journey. 
            Our website is designed to cater to your diverse needs, providing a one-stop destination for all your desires. 
            Elevate your online shopping with us and redefine the way you shop in the digital era.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox