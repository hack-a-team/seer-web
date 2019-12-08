import React, { useEffect, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { Spin } from 'antd';

import SideMenu from '../../components/SideMenu/SideMenu';
import InfoBox from '../../components/InfoBox/InfoBox';
import DateSelector from '../../components/DateSelector/DateSelector';
import fallback from '../../fallback'

const shipPink = require('../../ship-pink.svg')
const shipBlue = require('../../ship-blue.svg')
const shipGreen = require('../../ship-green.svg')

const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

const defaultProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMhxIp5O5RwSjTwR8ExBeuPDSefSA7a6M&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <Spin />,
  containerElement: <div style={{ width: '100vw', height: '100vh' }} />,
  mapElement: <div style={{ width: '100%', height: '100%' }} />
}

const MapHoc = withScriptjs(withGoogleMap(({ children }) => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: -23.972531, lng: -46.2930812 }} options={{ disableDefaultUI: true, styles: mapStyle }}>
    {children}
  </GoogleMap>
)));

function getMarkerIcon(markerData) {
  if (markerData.location !== 'ground') {
    switch (markerData.kind) {
      case 'civil':
        return shipBlue;
      case 'wet':
        return shipPink;
      default:
        return shipGreen;
    }
  }
}

const MapView = () => {
  const [day, setDay] = useState({
    cargos: []
  })
  const [markers, setMarkers] = useState([
    {
      lat: -23.970332,
      lng: -46.292417,
      location: "ship",
      kind: "wet",
      angle: -35,
    },
    {
      lat: -23.991490,
      lng:  -46.320252,
      location: "ship",
      kind: "dry",
      angle: -45,
    },
    {
      lat: -23.991108,
      lng:  -46.328299,
      location: "ship",
      kind: "civil",
      angle: -5,
    }
  ]);

  const selectDay = day => {
    const translatedDay = day.format('YYYY-MM-DD')
    const filteredDay = fallback.find(item => item.date === translatedDay) || fallback[0]
    setDay(filteredDay)
  }

  useEffect(() => {
    fetch('https://94f37516.ngrok.io/cargos')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Invalid Response');
      })
      .then(res => {
        // setMarkers(res.map(r => ({
        //   lat: r.latitude,
        //   lng: r.longitude,
        //   location: r.location,
        //   type: r.type,
        // })));
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <MapHoc {...defaultProps}>
        {day.cargos.filter(cargo => cargo.location === 'ship').map((m, key) => (
            <Marker
              key={key}
              icon={getMarkerIcon(m)}
              position={{ lat: Number(m.lat), lng: Number(m.lng) }}
            />
        ))}
      </MapHoc>
      <InfoBox day={day}/>
      <SideMenu >
          <DateSelector setDay={selectDay}/>
      </SideMenu>
    </>
  );
};

export default React.memo(MapView);
