import * as React from 'react';
import GoogleMap from 'google-map-react';
import GoogleMapPlace from './GoogleMapPlace';

interface iGoogleMapViewerProps {
  center: number[];
  zoom: number;
  placeCoords: {
    lat: number;
    lng: number;
  };
  text: string;
}

export class GoogleMapViewer extends React.Component<iGoogleMapViewerProps, any> {

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    placeCoords: {lat: 59.724465, lng: 30.080121}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const GOOGLE_MAP_API_KEY = 'AIzaSyCM2lfWR5sc1mjf56tRf-Gfnni09dApb_M';

    return (
      <GoogleMap
        bootstrapURLKeys={{key:GOOGLE_MAP_API_KEY}}
        center={this.props.center}
        zoom={this.props.zoom}>
        <GoogleMapPlace {...this.props.placeCoords} text={this.props.text} />
      </GoogleMap>
    );
  }
}