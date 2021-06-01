import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faCompactDisc,
  faDharmachakra,
  faSnowflake,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';
/* eslint-disable */

function OurServices() {
  return (
    <div id='ourservices' className='services'>
      <h1 className='py-5'>наши услуги</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faCompactDisc}
                  size='2x'
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
                <FontAwesomeIcon
                  className='icon'
                  icon={faBalanceScale}
                  size='2x'
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
                <FontAwesomeIcon
                  className='icon'
                  icon={faDharmachakra}
                  size='2x'
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
                <FontAwesomeIcon
                  className='icon'
                  icon={faSnowflake}
                  size='2x'
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

export default OurServices;
