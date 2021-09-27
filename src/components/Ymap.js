import { YMaps, Map } from 'react-yandex-maps';

const Ymap = () => (
  <YMaps>
    <div>
      <Map
        defaultState={{ center: [56.129354, 93.335116], zoom: 13 }}
      />
    </div>{' '}
  </YMaps>
);

export default Ymap;
