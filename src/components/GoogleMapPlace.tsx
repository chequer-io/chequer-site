import * as React from 'react';

export default class GoogleMapPlace extends React.Component<any, any> {
  constructor(props){
    super(props);

  }
  render() {

    return (
      <div className={'google-map-place'}>
        {this.props.text}
      </div>
    );
  }
}