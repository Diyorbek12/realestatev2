import React from 'react';
import Awards from './awards/Awards';
import Featured from './featured/Featured';
import Location from './location/Location';
import Price from './price/Price';
import Recent from './recent/Recent';
import Search from './search/Search';
import Team from './team/Team';


const Home = () => {
  return (
    <>
      <Search />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  )
}

export default Home