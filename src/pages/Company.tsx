import * as React from 'react';
import {Button} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export class Company extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <>

      <div className={'chequer-logo'}>
        <span className='chi-chequer-full' />
      </div>

      <div data-page-content='company'>

        <div className={'circles'}>
          <span className='chi-circle' />
          <span className='chi-circle' />
          <span className='chi-circle' />
        </div>
        <p className={'h1Label'}>
          DATA MANAGEMENT SOLUTION
        </p>
        <h1>DATABASE DRIVEN
            INNOVATION</h1>

        <article>
          <p className={'large'}>
            The world always goes on with data,<br />
            and SQLGate allows to manage them fast and safely.
          </p>
        </article>

        <div className='btn-wrap'>
          <Button size='big' color='red' animated onClick={e => {
            window.open('https://www.sqlgate.com');
          }}>
            <Button.Content visible>Go to SQLGate Website</Button.Content>
            <Button.Content hidden>
              <span className='chi-right' /> www.sqlgate.com
            </Button.Content>
          </Button>
        </div>

      </div>

      <div className={'footer'}>
        <NavLink to={'/c/company-vision'}>
          <span className='chi-mouse' />
        </NavLink>
      </div>

      </>
    )
  }
}