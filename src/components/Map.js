import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 56.129354,
      lng: 93.335116,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id='maps' className='map-window'>
        <div className='map-wraper'>
          <GoogleMapReact
            className='map-info'
            bootstrapURLKeys={{
              key: 'AIzaSyBugh - s6CjeDvecasIqsSF - TbxFHQpz2XU',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              className='map-text'
              lat={56.129354}
              lng={93.335116}
              text='🛠 Siberian Stop'
            />
          </GoogleMapReact>
          <p>Вы можете нас найти по адресу:</p>
        </div>
      </div>
    );
  }
}

export default Map;
