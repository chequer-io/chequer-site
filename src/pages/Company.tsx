import * as React from 'react';
import {Button} from 'semantic-ui-react';

export class Company extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="company">

        <h1>DATABASE DRIVEN<br />
            INNOVATION COMPANY</h1>

        <div style={{maxWidth: 600, marginLeft: 'auto'}}>
          <p className="large">
            The world always goes on with data,
            and CHEQUER allows to manage them fast and safely.
          </p>

          <p>
            The first product, SQLGate, is an integrated data management solution
            that supports all data-driven activities within the enterprise.
          </p>
        </div>

        <div className="btn-wrap">
          <Button color='violet'>GO TO SQLGate</Button>
        </div>
      </div>
    )
  }
}