import * as React from 'react';

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
            We believe that technologies change the world better and we put our efforts in it. We make high-quality software you've dreamed to work on with the newest technologies.
          </p>
        </article>
        <p className={'h1Label'}>
          OUR PRODUCT PROVOKE YOUR SUCCESS BUSINESS
        </p>
      </div>

      <div className={'footer'}>
        <a onClick={e => this.props.goPage('company-vision')}>
          <span className='chi-mouse' />
        </a>
      </div>

      </>
    )
  }
}