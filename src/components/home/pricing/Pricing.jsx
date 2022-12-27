import React from "react"
import Back from "../../container/Back"
import PriceCard from "../price/PriceCard"
import img from "../../assets/pricing.jpg"

import "../price/Price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing