import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
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

                <p className={'large'}>End-to-End Data Pipeline Solution</p>

                <p>
                  QuerPie is an integrated data solution with management, access
                  control and SQL based analysis & visualization. Make your data
                  work as easy as pie.
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
                  <Button
                    basic
                    onClick={e => {
                      window.open('https://www.querypie.com/download');
                    }}
                  >
                    Download
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={'sqlgate-box'}>
          <Grid container doubling columns={2}>
            <Grid.Row>
              <Grid.Column>
                <h1>PRODUCT</h1>
                <h2>SQLGate</h2>

                <p className={'large'}>
                  The Most Intelligent IDE for Databases
                </p>

                <p>
                  Whichever database you use, SQLGate is the best tool for your
                  database. Enjoy productive Database work!
                </p>

                <Button.Group basic size="big">
                  <Button
                    basic
                    onClick={e => {
                      window.open('https://www.sqlgate.com/product');
                    }}
                  >
                    Features
                  </Button>
                  <Button
                    basic
                    onClick={e => {
                      window.open('http://bit.ly/2EyxI9W');
                    }}
                  >
                    Brochure
                  </Button>
                  <Button
                    basic
                    onClick={e => {
                      window.open('https://www.sqlgate.com/download');
                    }}
                  >
                    Download
                  </Button>
                </Button.Group>
              </Grid.Column>

              <Grid.Column>
                <img
                  src={img.png_monitor_sqlgate}
                  onClick={e => {
                    window.open('https://www.sqlgate.com/product');
                  }}
                />
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
