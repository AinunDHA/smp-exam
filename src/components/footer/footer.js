import React from 'react'
import { Link } from 'gatsby'
import "./footer.css"

// Footer component
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul className="footer__list-links">
        <li>
          <Link to="/about-me/">About Us</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      {}
    </div>
  </footer>
)

export default Footer