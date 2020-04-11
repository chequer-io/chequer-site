import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class Footer extends React.Component<
  iPageControlProps,
  iPageControlState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="page-footer">
        <Grid container stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <div className={'logo'}>
                <span className="chi-chequer-full" />
              </div>
              <p>
                Copyright © 2020 CHEQUER Inc.<br />
                All rights reserved.
              </p>
              <div style={{ marginTop: 20 }}>
                <a
                  href={'https://blog.querypie.com'}
                  target={'_blank'}
                  className={'item'}
                >
                  <span className="chi-medium-solid" />
                </a>
                <a
                  href={'https://querypie.com'}
                  target={'_blank'}
                  className={'item'}
                >
                  <span className="chi-querypie-logo" />
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
