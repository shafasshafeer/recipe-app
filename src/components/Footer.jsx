// src/Footer.jsx
import React from 'react';
import '../components/Footer.css'
const Footer = () => {
    return (
        <footer className="footer bg-warning">
            <div className="footer-container  ">
                <div className="footer-section">
                    <h3 className=''>Recipe App</h3>
                    <p>&copy; {new Date().getFullYear()} RecipeApp. All rights reserved.</p>
                </div>

                <div className="footer-section 
                ">
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <p>Follow Us:</p>
                    <ul className="social-media">
                        <li><a href="https://facebook.com">Facebook  </a></li>
                        <li><a href="https://instagram.com">Instagram  </a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
