import React from 'react'
import './SponsorInfo.css'
import security from "../Gallery/güvenli.png"
import kasko from "../Gallery/kasko.png"
import rightOfWithdrawal from "../Gallery/cayma-hakki.png"

const SponsorInfo = () => {
  return (
    <div className="sponsorInfoPage">
      <div className='SponsorCard'>
        <div className="cardText">
          <h1>Security</h1>
          <p>
          You can safely rent your vehicles from our offices and leave them at any point you want.
          </p>
        </div>
        <div className="cardImg"><img src={security} alt="" /></div>
                 
      </div>
      <div className='SponsorCard'>
        <div className="cardText">
          <h1>Insurence</h1>
          <p>
          If something happens to your vehicle, the fee will be deducted from the insurance company.
          </p>
        </div>
        <div className="cardImg"><img src={kasko} alt="" /></div>
                 
      </div>
      <div className='SponsorCard'>
        <div className="cardText">
          <h1>Refund</h1>
          <p>
          After renting the vehicle, you can return it free of charge for the days you do not use it.
          </p>
        </div>
        <div className="cardImg"><img src={rightOfWithdrawal} alt="" /></div>
                 
      </div>

    </div>
  )
}

export default SponsorInfo