import * as React from 'react';
import {Container, Grid} from 'semantic-ui-react';

export class CompanyVision extends React.Component<any, any> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="company-vision">


        <Grid doubling container>
          <Grid.Row>
            <Grid.Column width={16}>
              <article>
                <h1>VISION</h1>
                <h2>
                  Innovate business work productivities with technologies
                </h2>

                <p>
                  <b>MISSION</b><br />
                  Make data work safer<br />
                  Make data work faster<br />
                  Make data wore more enjoyable<br />
                </p>
                <p>
                </p>
              </article>


            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}