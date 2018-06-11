import React from 'react';
import * as img from 'assets/images';

export default class Company extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    let pageMinHeight = this.props.height;
    if (pageMinHeight < 600) {
      pageMinHeight = 600;
    }

    return (
      <>
        <div className={'chequer-logo'}>
          <span className="chi-chequer-full" />
        </div>

        <table style={{ height: pageMinHeight - 100 }}>
          <tbody>
            <tr>
              <td>
                <div data-page-content="company">
                  <div className="hiring">
                    <img
                      src={img.png_hiring}
                      onClick={e => {
                        window.open('https://chequer.workable.com/');
                      }}
                    />
                    <a href={'https://chequer.workable.com/'} target={'_blank'}>
                      We Are Hiring >
                    </a>
                  </div>
                  <h1>WE LEAD TECHNOLOGIES</h1>
                  <article>
                    <p className={''}>
                      We believe that technologies change the world better and
                      we put our efforts in it. We make high-quality software
                      you've dreamed to work on with the newest technologies.
                    </p>
                  </article>
                  <p className={'h1Label'}>
                    OUR PRODUCT PROVOKE YOUR SUCCESS BUSINESS
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={'footer'}>
          <a onClick={e => this.props.goPage('company-vision')}>
            <span className="chi-mouse" />
          </a>
        </div>
      </>
    );
  }
}
