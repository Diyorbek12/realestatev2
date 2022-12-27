import React from "react";
import img from "../../assets/services.jpg";
import Back from "../../container/Back";
import FeaturedCard from "../featured/FeaturedCard";

import "../featured/Featured.css";


const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services