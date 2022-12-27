import React from "react";
import Back from "../../container/Back";
import RecentCard from "../recent/RecentCard";
import img from "../../assets/about.jpg";

import "../recent/Recent.css";


const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog