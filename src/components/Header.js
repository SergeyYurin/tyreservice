import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
/* eslint-disable */

function Header() {
  return (
    <div id='home' className='header-wraper'>
      <div className='main-info' id='map'>
        <YMaps>
          <div>Вы можете найти нас на Яндекс Картах</div>
          <Map
            defaultState={{ center: [56.12299, 93.323671], zoom: 9 }}
          />
        </YMaps>
      </div>
    </div>
  );
}

export default Header;
