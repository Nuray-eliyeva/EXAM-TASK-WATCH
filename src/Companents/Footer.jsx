import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12  col-md-4 col-12">
            <ul>
              <li><img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png" alt="logo" /></li>
              <li><p className='mt-4'>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-12"><h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Offers & Discounts</li>
              <li>Get Coupon</li>
              <li>Get Coupon</li></ul>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <h4>New Products</h4>
            <ul>
              <li>Woman Cloth</li>
              <li>Fashion Accessories</li>
              <li>Man Accessories</li>
              <li>Rubber made Toys</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-12">
            <h4>Support</h4>
            <ul><li>Frequently Asked Questions</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Report a Payment Issue</li></ul>
          </div>
        </div>
       <div className="last">
          <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
          <div className="fot-icons">
            <FaTwitter /><FaFacebookF /><FaWikipediaW />
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer