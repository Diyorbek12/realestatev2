import React from 'react';
import Heading from '../../container/Heading';

import './Featured.css';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <div className="container">
            <Heading title='Featured Property Types' subtitle='Find All Type of Property' />
            <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured