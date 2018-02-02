import * as React from 'react';
import {Grid} from 'semantic-ui-react';

export class Footer extends React.Component<iPageControlProps, iPageControlState> {
  constructor(props) {
    super(props);

  }

  public render() {
    return (
      <div className='page-footer'>

          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className={'logo'}>
                  <span className='chi-chequer-full' />
                </div>
                <p>
                  Copyright © 2018 CHEQUER Inc.<br/>
                  All rights reserved.
                </p>
              </Grid.Column>
              <Grid.Column width={8}>

                <Grid stackable>
                  <Grid.Row>
                    <Grid.Column width={6}>

                      <h3>RECRUIT</h3>
                      <p>
                        <span className="chi-envelope"/> <a href="mailto:join@chequer.io">join@chequer.io</a>
                      </p>

                      <h3>PARTNER</h3>
                      <p>
                        <span className="chi-envelope"/> <a href="mailto:bill@chequer.io">bill@chequer.io</a>
                      </p>

                      <h3>ETC</h3>
                      <p>
                        <span className="chi-envelope"/> <a href="mailto:brant@chequer.io">brant@chequer.io</a>
                      </p>

                    </Grid.Column>
                    <Grid.Column width={10}>

                      <h3>CONTACT INFO</h3>
                      <p>
                        <b>Address</b> : No.1401, 2F, 551-24, Yangcheon-ro, Gangseo-gu, Seoul, Republic of Korea
                      </p>
                      <p><b>TEL</b> : <a href="tel:02-338-1876">02-338-1876</a></p>
                      <p><b>FAX</b> : <a href="tel:02-6008-1876">02-6008-1876</a></p>

                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </Grid.Column>
            </Grid.Row>
          </Grid>

      </div>
    )
  }
}