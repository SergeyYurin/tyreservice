import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
/* eslint-disable */

function Header() {
  return (
    <div id='home' className='header-wraper'>
      <YMaps>
        <div>My awesome application with maps!</div>
        <Map
          defaultState={{ center: [56.12299, 93.323671], zoom: 9 }}
        />
      </YMaps>
    </div>
  );
}

export default Header;
