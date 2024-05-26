import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactNav(props){
    return(
        <header className="header row" id="top">
        <div className="col logo-col">
          <img src="assets/images/logo.png" alt="Your Image"/>
        </div>
        <button className="btn-white duplicate">Join</button>
        <div className="hamburger" tabIndex="0">
          <span className="material-symbols-outlined">menu</span>
          <div className="notification-down">
            <ul>
              <li><Link to="/" className={props.activePage}>Home</Link></li>
              <li><Link to="/about" className={props.activePage}>About Us</Link></li>
              <li><Link to="/services" className={props.activePage}>Services</Link></li>
              <li><Link to="/portfolio" className={props.activePage}>Portfolio</Link></li>
              <li><Link to="/contact" className={props.activePage}>Contact Us</Link></li>
              <li><Link to="/blog" className={props.activePage}>Blog</Link></li>
              <li className="button"><Link to="/get-the-app">Get the App</Link></li>
            </ul>              
          </div>
        </div>
        <div className="col navigation-col">
          <Link to="/" className={props.activePage}>Home</Link>
          <Link to="/about" className={props.activePage}>About Us</Link>
          <Link to="/services" className={props.activePage}>Services</Link>
          <Link to="/portfolio" className={props.activePage}>Portfolio</Link>
          <Link to="/contact" className={props.activePage}>Contact Us</Link>
          <Link to="/blog" className={props.activePage}>Blog</Link>
        </div>
        <div className="col btn-primary">
          <button className="btn-white">Join</button>
          <button className="btn-black">Get the App</button>
        </div>
      </header>
    );
}