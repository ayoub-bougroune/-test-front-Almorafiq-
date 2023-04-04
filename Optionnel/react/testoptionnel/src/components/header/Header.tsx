import React from 'react';
import { FaFacebookF,FaTwitter } from 'react-icons/fa';
import './styles.css';

export type IHeaderProps = {
    
}

const Header: React.FC<IHeaderProps> = ({ }) => {
    return (
        <header className="header">
          <nav className="navbar">
            <label className="logo">BizeOne</label>
            <ul className="links">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="team">Team</a></li>
                <li><a href="works">Works</a></li>
                <li><a href="prices">Prices</a></li>
                <li><a href="blog">Blog</a></li>
                <li><a href="contact US">contact Us</a></li>
                <li><FaFacebookF className='fac' color='#fff' /></li>  
                <li><FaTwitter className='twit' color='#fff' /></li>
                </ul>
            </nav>        
            <section className="container">
                <label className="text-1">Quickly setup your website</label>
                <label className="text-2">Style up Your Business Strategy</label>
                <label className="text-3">it has all unique & new digital experience layouts.</label>
                <div className="btn">
                    <button className="btn-1">Read More</button> <button className="btn-2">Buy BizOne</button>  
                </div>
            </section>
        </header>
    );
}

export { Header };