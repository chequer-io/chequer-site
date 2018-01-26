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
        <h1>WE LEAD TECHNOLOGIES</h1>
        <article>
          <p className={''}>
            We believe that technologies change the world better and we put our efforts in it.&nbsp;&nbsp;
            We make high-quality software you've dreamed to work on with the newest technologies.

          </p>
        </article>
        <p className={'h1Label'}>
          OUR PRODUCT PROVOKE YOUR SUCCESS BUSINESS
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