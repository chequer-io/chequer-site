import * as React from 'react';
import {Button} from 'semantic-ui-react';

export class Company extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content='company'>

        <h1>DATABASE DRIVEN<br />
            INNOVATION COMPANY</h1>

        <article>
          <p className='large'>
            The world always goes on with data,
            and CHEQUER allows to manage them fast and safely.
          </p>

          <p>
            The first product, SQLGate, is an integrated data management solution
            that supports all data-driven activities within the enterprise.
          </p>
        </article>

        <div className='btn-wrap'>
          <Button size='big' color='violet' animated>
            <Button.Content visible>Go to SQLGate Website</Button.Content>
            <Button.Content hidden>
              <span className='chi-right' /> www.sqlgate.com
            </Button.Content>
          </Button>
        </div>

      </div>
    )
  }
}