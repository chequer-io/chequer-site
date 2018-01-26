import * as React from 'react';
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
        <h1>We lead technologies</h1>
        <article>
          <p className={'large'}>
              We make high-quality software you've dreamed<br/>to work on with the newest technologies.
          </p>
        </article>
        <br/>
          <p className={'h1Label'}>
              Our product provoke your success business
          </p>
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