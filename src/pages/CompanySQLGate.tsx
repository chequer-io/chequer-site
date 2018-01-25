import * as React from 'react';
import {Button, Grid, Segment} from 'semantic-ui-react';
import * as img from '../assets/images';

export class CompanySQLGate extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    let clients = [
      {name: '', src: img.jpg_samsung},
      {name: '', src: img.jpg_kt},
      {name: '', src: img.jpg_cj},
      {name: '', src: img.jpg_sk},
      {name: '', src: img.jpg_hyundai},
      {name: '', src: img.jpg_posco},
      {name: '', src: img.jpg_kumho},
      {name: '', src: img.jpg_mbc},
      {name: '', src: img.jpg_kbs},
      {name: '', src: img.jpg_sbs},
      {name: '', src: img.jpg_etri},
      {name: '', src: img.jpg_seoul},
      {name: '', src: img.jpg_ls},
      {name: '', src: img.jpg_asiana},
      {name: '', src: img.jpg_kb},
      {name: '', src: img.jpg_lge},
      {name: '', src: img.jpg_hyundaicard},
      {name: '', src: img.jpg_dongbu},
      {name: '', src: img.jpg_wemakeprice},
      {name: '', src: img.jpg_samsungSds},
      {name: '', src: img.jpg_samsungService},
    ];

    return (
      <div data-page-content="company-sqlgate">
        <div className={'key-box'}>

          <Grid container doubling columns={2}>
            <Grid.Row>
              <Grid.Column>
                <h1>PRODUCT</h1>
                <h2>SQLGate</h2>

                <p className={'large'}>
                  The most intelligent IDE for database
                </p>

                <p>
                  Whichever database you use,
                  SQLGate is the best tool for your database.
                  Enjoy productive database life!
                </p>

                <Button.Group basic size='big'>
                  <Button basic onClick={e => {
                    window.open('https://www.sqlgate.com/whatsNew');
                  }}>New Feature</Button>
                  <Button basic onClick={e => {
                    window.open('https://www.sqlgate.com/download');
                  }}>Download</Button>
                </Button.Group>

              </Grid.Column>

              <Grid.Column>

                <img src={img.png_monitor} onClick={e => {
                  window.open('https://www.sqlgate.com/product');
                }} />

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </div>

        <div className={'features-box'}>
          <Grid container doubling columns={2}>
            <Grid.Row stretched columns={3}>
              <Grid.Column>
                <Segment>
                  <h3>Integrated Development Environment for Database</h3>
                  <p>
                    SQLGate is the best IDE for Database.

                    Working with database becomes easier with SQLGate.
                    Download our free trial to see what it's like!
                  </p>
                </Segment>
                <Segment>
                  <h3>Supports various databases</h3>
                  <p>
                    SQLGate supports various databases including Oracle, DB2, SQL Server, MySQL, MariaDB, and Tibero.
                  </p>
                </Segment>
                <Segment>
                  <h3>Object Explorer & Quick Object Side Panel</h3>
                  <p>
                    We are proud of SQLGates Object Explorer.
                    SQLGate allows you to find the tables, views, triggers, indexes, and functions quick and easy
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h3>An innovative user interface</h3>
                  <p>
                    SQLGate provides unique user interface.
                    Auto Compete Feature gives you a full name with just a few words from a table, field, or keyword.
                    You can view data in left to right or top to bottom view from Query Result Grid and export the selected data.
                  </p>
                </Segment>
                <Segment>
                  <h3>Database health and stability</h3>
                  <p>
                    Assess your database’s health and check the database performance, configuration, schemas and security vulnerabilities with SQLGate Admin Module’s Database Health Checks.
                  </p>
                </Segment>
                <Segment>
                  <h3>Multi-query execution support</h3>
                  <p>
                    Does your work involve running multiple queries at the same time? You can run multiple queries simultaneously and see the requested data in optimal display.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <h3>Universal tools for databases</h3>
                  <p>
                    SQLGate is more than just a simple query tool. We provide all the functions users might need for database running including database backup and recovery, data export and import, file extraction from Excel, SQL, DBase, and database status check.
                  </p>
                </Segment>
                <Segment>
                  <h3>Automatic generation of powerful queries</h3>
                  <p>
                    On top of DML and DDL extraction, SQLGate's query builder allows you to create complex T-SQL in seconds.
                  </p>
                </Segment>
                <Segment>
                  <h3>Template-based database reports provided</h3>
                  <p>
                    Thirteen different database object reports can be generated, including table, view, synonym, procedure, trigger, and index. On Report Designer, you can customize the layout of the report.
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
                <h2>
                  MAIN CLIENTS
                </h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid doubling container columns={5}>
            <Grid.Row>
              {clients.map((img, i) => {
                return <Grid.Column key={i}>
                  <div className="client-logo"><img src={img.src} /></div>
                </Grid.Column>
              })}
            </Grid.Row>
          </Grid>
        </div>

      </div>
    )
  }
}