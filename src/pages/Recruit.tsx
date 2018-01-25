import * as React from 'react';
import {Grid} from 'semantic-ui-react';

export class Recruit extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="culture">
        <Grid doubling container>
          <Grid.Row>
            <Grid.Column textAlign={'center'}>
              <h1>
                RECRUIT
              </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}