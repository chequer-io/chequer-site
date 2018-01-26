import * as React from 'react';
import {Card, Grid} from 'semantic-ui-react';
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

        <Grid container doubling columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Card fluid>

                <div style={{height: '300px'}}>
                  <GoogleMapViewer
                    text={'SEOUL OFFICE'}
                    center={[37.5588997, 126.8621197]}
                    zoom={10}
                    placeCoords={{
                      lat: 37.5588997, lng: 126.8621197
                    }} />
                </div>

                <Card.Content>
                  <Card.Header>
                    <span className="chi-location" />
                    &nbsp;
                    SEOUL OFFICE
                  </Card.Header>
                  <Card.Description>No.1401, 2F, 551-24, Yangcheon-ro, Gangseo-gu, Seoul, Republic of Korea</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  TEL : 02-338-1876<br/>
                  FAX : 02-6008-1876
                </Card.Content>

              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid>

                <div style={{height: '300px'}}>
                  <GoogleMapViewer
                    text={'JEJU OFFICE'}
                    center={[33.3073909, 126.8031071]}
                    zoom={10}
                    placeCoords={{
                      lat: 33.3073909, lng: 126.8031071
                    }} />
                </div>

                <Card.Content>
                  <Card.Header>
                    <span className="chi-location" />
                    &nbsp;
                    JEJU OFFICE
                  </Card.Header>
                  <Card.Description>2F, 8, Gamabyeongpung-ro, Pyoseon-myeon, Seogwipo-si, Jeju-do, Republic of Korea</Card.Description>
                </Card.Content>

              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    )
  }
}