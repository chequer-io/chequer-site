import * as React from 'react';
import {Grid} from 'semantic-ui-react';

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
                  To Maximize<br/>
                    Data Business Productivity
                </h2>

                <h1>MISSION</h1>
                <p>
                    make data work faster<br />
                    make data work safer<br />
                    make data work enjoyable<br />
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