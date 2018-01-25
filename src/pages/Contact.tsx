import * as React from 'react';
import {Grid} from 'semantic-ui-react';
import {GoogleMapViewer} from '../components/index';

export class Contact extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="contact">
        <Grid doubling container>
          <Grid.Row>
            <Grid.Column textAlign={'center'}>
              <h1>
                CONTACT
              </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div style={{height: '500px'}}>
        <GoogleMapViewer
          center={[37.5588783, 126.8270768]}
          zoom={9}
          placeCoords={{
            lat: 37.5588783, lng: 126.8270768
          }} />
        </div>
      </div>
    )
  }
}