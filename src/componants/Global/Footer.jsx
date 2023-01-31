import React from 'react';
import './style/Footer.css'

export default function Footer() {
    return (
      <div>
        <footer>
            <ul className='footer-ul'>
                <li className='footer-li'>
                    <a href='http://facebook.com' className='footer-a'><img src="./logo-facebook.png" alt="Se rendre sur la page Facebook" className='footer-img'/></a>
                </li>
                <li className='footer-li'>
                    <a href='http://instagram.com' className='footer-a'><img src="./Instagram_icon.png" alt="Se rendre sur la page Instagram" className='footer-img'/></a>
                </li>
            </ul>
        </footer>
      </div>
    );
}
