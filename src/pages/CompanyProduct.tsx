import React from 'react';
import {Button, Grid} from 'semantic-ui-react';
import * as img from 'assets/images';

export default class CompanyProduct extends React.Component<
  iCommonPageProps,
  iCommonPageState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    let clients = [
      { name: '', src: img.jpg_samsung },
      { name: '', src: img.jpg_kt },
      { name: '', src: img.jpg_cj },
      { name: '', src: img.jpg_sk },
      { name: '', src: img.jpg_hyundai },
      { name: '', src: img.jpg_posco },
      { name: '', src: img.jpg_kumho },
      { name: '', src: img.jpg_mbc },
      { name: '', src: img.jpg_kbs },
      { name: '', src: img.jpg_sbs },
      { name: '', src: img.jpg_etri },
      { name: '', src: img.jpg_seoul },
      { name: '', src: img.jpg_ls },
      { name: '', src: img.jpg_asiana },
      { name: '', src: img.jpg_kb },
      { name: '', src: img.jpg_lge },
      { name: '', src: img.jpg_hyundaicard },
      { name: '', src: img.jpg_dongbu },
      { name: '', src: img.jpg_wemakeprice },
      { name: '', src: img.jpg_samsungSds },
    ];

    return (
      <div data-page-content="company-product">
        <div className={'key-box'}>
          <Grid container doubling columns={2}>
            <Grid.Row>
              <Grid.Column>
                <img
                  src={img.png_monitor_querypie}
                  onClick={e => {
                    window.open('https://www.querypie.com/');
                  }}
                />
              </Grid.Column>

              <Grid.Column textAlign="right">
                <h1>PRODUCT</h1>
                <h2>QueryPie</h2>

                <p className={'large'}>Optimized for the cloud database management</p>
                <p>
                  QueryPie allows teams to share data with peace of mind. Assign data user access roles, rights, and track any data changes by date, time, and user id. Generate a complete data editing log.
                </p>

                <Button.Group basic size="big">
                  <Button
                    basic
                    onClick={e => {
                      window.open('https://www.querypie.com/');
                    }}
                  >
                    Features
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={'client-box'}>
          <Grid doubling container>
            <Grid.Row>
              <Grid.Column width={16} textAlign={'center'}>
                <h2>FEATURED CLIENTS</h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid doubling container columns={5}>
            <Grid.Row>
              {clients.map((img, i) => {
                return (
                  <Grid.Column key={i}>
                    <div className="client-logo">
                      <img src={img.src} />
                    </div>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
