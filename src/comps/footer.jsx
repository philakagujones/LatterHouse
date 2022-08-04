import React from 'react'
import '../styles/footer.css'

import { UilInstagram, UilTwitter, UilFacebookF } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <div className="words">
          <ul>
            <li>
              <Link className="link" to="/size">SIZE GUIDE</Link>
            </li>
            <li>
              <Link className="link" to="/privacy">PRIVACY</Link>
            </li>
            <li>
              <Link className="link" to="/terms">TERMS</Link>
            </li>
            <li>
              <Link className="link" to="/faq">FAQ</Link>
            </li>
          </ul>
      </div>
      <div className="icons">
          <a  href={'https://instagram.com/latterhouseco'} 
              target={'_blank'}
              rel={'noopener noreferrer'}>
                  <div className="instagram">
                  < UilInstagram size='1rem' /> 
                  </div>
          </a>
          <a  href={'https://twitter.com/philakagujones'} 
              target={'_blank'}
              rel={'noopener noreferrer'}>
                  <div className="twitter">
                    <UilTwitter size='1rem'/> 
                  </div>
          </a>
          <a  href={'https://www.facebook.com/latterhouseco'} 
              target={'_blank'}
              rel={'noopener noreferrer'}>
                  <div className="facebook">
                    <UilFacebookF size='1rem'/> 
                  </div>
          </a>
      </div>
    </div> 
  )
}

export default Footer