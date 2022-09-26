import React from 'react'
import {AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>BCA Burger Wala</h2>
            <p>We are trying to give you the best taste possible</p> 
            <br />
            <em>We give attention to genuine feedback </em>
            <strong>All right received @bcaburgerwala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://www.youtube.com/channel/UCOP6Ysf4-uT6dhOl-X-1dSQ"><AiFillYoutube/></a>
            <a href="http://instagram.com/_ankushnain_"><AiFillInstagram/></a>
        </aside>
    </footer>
  )
}

export default Footer