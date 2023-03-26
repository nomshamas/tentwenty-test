import React from 'react'
// import card from '../assets/card1.png'

function Products() {
  return (
    <div className='products'>
      <div className='products_row'>
        <h1 className='products_row-title'>Quality Products</h1>
        <p className='products_row-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='products_cards'>
        <div>
            {/* <img src={card} className='' alt='Bench in Garden' /> */}
        </div>
        <div>
            {/* <img src={card2} className='' alt='Man Standing' /> */}
        </div>
        <div>
            {/* <img src={card3} className='' alt='Man Diging' /> */}
        </div>
      </div>
    </div>
  )
}

export default Products
