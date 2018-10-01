import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import * as img from 'assets/images';

export default class CompanySQLGate extends React.Component<
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
      <div data-page-content="company-sqlgate">
        <div className={'key-box'}>
          <Grid container doubling columns={2}>
            <Grid.Row>
              <Grid.Column>
                <h1>PRODUCT</h1>
                <h2>SQLGate</h2>

                <p className={'large'}>The Most Intelligent IDE for Databases</p>

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
                  src={img.png_monitor}
                  onClick={e => {
                    window.open('https://www.sqlgate.com/product');
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div className={'features-box'}>
          <Grid container doubling columns={2}>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment>
                  <h3>Integrated Development Environment for Databases</h3>
                  <p>
                    SQLGate is the best IDE for Databases. Working with any database
                    becomes easier using SQLGate. Download our free trial today to see
                    what it's like!
                  </p>
                </Segment>
                <Segment>
                  <h3>Supports Various Databases</h3>
                  <p>
                    SQLGate supports various databases including Oracle, DB2,
                    SQL Server, MySQL, MariaDB, and Tibero.
                  </p>
                </Segment>
                <Segment>
                  <h3>Object Explorer & Quick Object Side Panel</h3>
                  <p>
                    We are proud of the SQLGate Object Explorer. SQLGate allows you
                    to find the tables, views, triggers, indexes, and functions
                    quick and easy.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h3>An Innovative User Interface</h3>
                  <p>
                    SQLGate provides a unique user interface. Our Auto-Complete feature
                    provides full names with just a few words written from a table,
                    field, or keyword. You can view data in left to right or top
                    to bottom view from the Query Result Grid and export selected data.
                  </p>
                </Segment>
                <Segment>
                  <h3>Database Health and Stability</h3>
                  <p>
                    Assess your database’s health and check the database
                    performance, configuration, schemas and security
                    vulnerabilities with SQLGate Admin Module’s Database Health
                    Checks.
                  </p>
                </Segment>
                <Segment>
                  <h3>Multi-query Execution Support</h3>
                  <p>
                    Does your work involve running multiple queries at the same
                    time? You can run multiple queries simultaneously and view
                    the requested data in optimal display.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h3>Universal Tools for Databases</h3>
                  <p>
                    SQLGate is more than just a simple query tool. We provide
                    all the functions users might need for database running
                    including database backup and recovery, data export and
                    import, file extraction from Excel, SQL, DBase, and database
                    status checks.
                  </p>
                </Segment>
                <Segment>
                  <h3>Automatic Generation of Powerful Queries</h3>
                  <p>
                    On top of DML and DDL extraction, SQLGate's query builder
                    allows you to create complex T-SQL in seconds.
                  </p>
                </Segment>
                <Segment>
                  <h3>Template-Based Database Reports Provided</h3>
                  <p>
                    Thirteen different database object reports can be generated,
                    including table, view, synonym, procedure, trigger, and
                    index. On Report Designer, you can even customize the layout of
                    the report!
                  </p>
                </Segment>
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
