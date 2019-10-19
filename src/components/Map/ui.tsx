import React from 'react';
import GoogleMapReact from 'google-map-react';
import * as styles from './styles';

interface Props {
  center: {
    lat: number,
    lng: number,
  },
  zoom: number,
}

const {
  Container,
} = styles;

const Map = (props: Props) => {
  const { center, zoom } = props;
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </Container>
  );
};

export default Map;
