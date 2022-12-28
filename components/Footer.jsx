import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Himalayan Curio House</p>
      <p className="icons">
        <a href="https://www.instagram.com/raho_0l/"><AiFillInstagram /></a>
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer