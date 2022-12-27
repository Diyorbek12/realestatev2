import React from 'react';
import Heading from '../../container/Heading';

import './Recent.css';
import RecentCard from './RecentCard';

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
            <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et delore  magna  aliqua.' />
            <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent