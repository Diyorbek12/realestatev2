import React from 'react';
import Heading from '../../container/Heading'
import './Search.css';

const Search = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="Search Your Next Home" subtitle="Find new & featured
          property located in your local city." />
            <form action="" className='flex'>
                <div className="box">
                    <span>City/Street</span>
                    <input type="text" placeholder='Location' />
                </div>
                <div className="box">
                    <span>Property Type</span>
                    <input type="text" placeholder='Property Type' />
                </div>
                <div className="box">
                    <span>Price Range</span>
                    <input type="text" placeholder='Price Range' />
                </div>
                <div className="box">
                  <h4>Search</h4>
                </div>
                <button className='btn'>
                  <i className='fa fa-search' />
                </button>
            </form>
        </div>
      </section>
    </>
  )
}

export default Search