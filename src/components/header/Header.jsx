import React, { useState } from 'react';
import { nav } from '../data/Data';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
            <div className="logo">
                <img src={require("../assets/logo.png")} alt="logo" />
            </div>
            <div className="nav">
                <ul className={navList ? 'small' : 'flex'}>
                    {nav.map((list, index) => (
                        <li key={index}>
                            <Link to={list.path} onClick={() => setNavList(!navList) & window.scrollTo(0, 0)}>{list.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="button flex">
                <h4>
                    <span>2</span> My List
                </h4>
                <button className='btn1'>
                    <i className='fa fa-sign-out' /> Sign In
                </button>
            </div>
            <div className='toggle'>
                <button onClick={() =>  setNavList(!navList)}>
                    {navList ? <i className='fa fa-times' />
                    : <i className='fa fa-bars' />}
                </button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header