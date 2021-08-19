import React from 'react';
import car from '../car.png';
import truck from '../truck.png';

/* eslint-disable */

function Prices() {
  return (
    <div id='prices' className='prices'>
      <h1 className='py-5'>наши цены</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-xm-12'>
            <div className='box'>
              <div className='circle'>
                <img className='prices-logo' src={car} alt='car...' />
              </div>
              <h3>Легковой шиномонтаж</h3>
              <p>
                Занимаемся ремонтом шин любой сложности с последующей
                гарантией.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-6 col-xm-12'>
            <div className='box'>
              <div className='circle'>
                <img
                  className='prices-logo'
                  src={truck}
                  alt='truck...'
                />
              </div>
              <h3>Грузовой шиномонтаж</h3>
              <p>Балансируем Ваши колеса на новейшем оборудовании</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
