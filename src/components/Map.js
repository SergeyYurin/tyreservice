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
      <div id='maps' className='map-window container py-5'>
        <div className='row'>
          <div className='col-lg-6 col-xm-12'>
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
            </div>
          </div>
          <div className='col-lg-6 col-xm-12 map-description'>
            <h1 className='map-heading'>
              Вы можете найти нас по адресу:
            </h1>
            <p className='map-text'>
              ул. Юности, 2г Сосновоборск, Красноярский край, 662500
            </p>
            <p className='map-text'>телефон: +7(923)319-21-29</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
