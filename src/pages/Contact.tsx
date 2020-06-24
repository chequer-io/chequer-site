import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { GoogleMapViewer } from 'components/index';

export default class Contact extends React.Component<
  iCommonPageProps,
  iCommonPageState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div data-page-content="contact">
        <Grid doubling container>
          <Grid.Row>
            <Grid.Column textAlign={'center'}>
              <h1>CONTACT</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid container doubling columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Card fluid>
                <div style={{ height: '300px' }}>
                  <GoogleMapViewer
                    text={'SEOUL OFFICE'}
                    center={[37.562279, 126.830072]}
                    zoom={11}
                    placeCoords={{
                      lat: 37.562279,
                      lng: 126.830072,
                    }}
                  />
                </div>

                <Card.Content>
                  <Card.Header>
                    <span className="chi-location" />
                    &nbsp; SEOUL OFFICE
                  </Card.Header>
                  <Card.Description>
                    #917, 21, Magokjungang 6-ro, Gangseo-gu, Seoul, 07801,
                    Republic of Korea
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  TEL : <a href="tel:82-02-2663-3039">+82 2-338-1876</a>
                  <br />
                  FAX : <a href="tel:82-02-6008-1876">+82 2-6008-1876</a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <div style={{ height: '300px' }}>
                  <GoogleMapViewer
                    text={'U.S OFFICE'}
                    center={[37.3922714, -121.9358533]}
                    zoom={9}
                    placeCoords={{
                      lat: 37.3922714,
                      lng: -121.9358533,
                    }}
                  />
                </div>

                <Card.Content>
                  <Card.Header>
                    <span className="chi-location" />
                    &nbsp; U.S OFFICE
                  </Card.Header>
                  <Card.Description>
                    3003 North 1st Street, Suite 221, San Jose
                    CA, United States
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  TEL : <a href="tel:1-415-319-5225">+1 415-319-5225</a>
                  <br />
                  &nbsp;
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
