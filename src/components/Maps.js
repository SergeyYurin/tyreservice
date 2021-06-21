import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
/* eslint-disable */

function Maps() {
  const coordinates = [
    [56.12299, 93.323671],
    [56.12299, 93.323671],
  ];

  return (
<<<<<<< Updated upstream
    <div id='maps' className='header-wraper'>
      <div className='main-info' id='map'>
=======
    <div id='maps' className='map-wraper'>
      <div className='map-info' id='map'>
>>>>>>> Stashed changes
        <YMaps>
          <h1>Вы можете найти нас на Яндекс Картах</h1>
          <div className='map-window'>
            <Map
              width='100%'
              height='100%'
              defaultState={{
                center: [56.12299, 93.323671],
                zoom: 15,
              }}
            >
              {coordinates.map((coordinate) => (
                <Placemark geometry={coordinate} />
              ))}
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
}

export default Maps;
