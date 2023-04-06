import React from 'react'
import Search from '../images/search-icon.svg';

function Banner(){
    return(
          <div>

            <div className='banner-title'>
                <h1>Rethink your living & renting</h1>
                <p>Make your stay painless with us</p>
            </div>

            <div className='serch-box flex-box shadow-bg'>
                <div className='white-box'>
                    <label>CITY</label>
                    <input type="text" placeholder='Select your city' />
                </div>

                <div className='white-box'>
                    <label>CITY</label>
                    <input type="text" placeholder='Select your city' />
                </div>

                <div className='white-box'>
                    <label>CITY</label>
                    <input type="text" placeholder='Select your city' />
                </div>


                <button className='gradient-bg'>
                    <img src={Search} />
                    Search
                </button>

            </div>
            <div className='arrow'>
                <div className='arrow-down'></div>

            </div>

      </div>
    )
}

export default Banner