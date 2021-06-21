import React from 'react';
import tyre from '../tyre.png';
import rim from '../rim.png';
import balance from '../balance.png';
import wintertyre from '../wintertyre.png';
/* eslint-disable */

function Services() {
  return (
    <div id='services' className='services'>
      <h1 className='py-5'>наши услуги</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <img
                  className='service-logo'
                  src={tyre}
                  alt='tyre...'
                />
              </div>
              <h3>Шиномонтаж</h3>
              <p>
                Занимаемся ремонтом шин любой сложности с последующей
                гарантией.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <img
                  className='service-logo'
                  src={balance}
                  alt='balance...'
                />
              </div>
              <h3>Балансировка</h3>
              <p>Балансируем Ваши колеса на новейшем оборудовании</p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <img
                  className='service-logo-rim'
                  src={rim}
                  alt='rim...'
                />
              </div>
              <h3>Правка литых дисков</h3>
              <p>
                Биение колес — одна из самых частых проблем
                автовладельцев. Мы занимаемся правкой дисков.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <img
                  className='service-logo'
                  src={wintertyre}
                  alt='wintertyre...'
                />
              </div>
              <h3>Дошиповка</h3>
              <p>
                Ваши колеса будут стопроцентно готовы к зиме после
                установки недостающих шипов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
