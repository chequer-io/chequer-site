import * as React from 'react';
import {Container, Grid} from 'semantic-ui-react';

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

      </div>
    )
  }
}