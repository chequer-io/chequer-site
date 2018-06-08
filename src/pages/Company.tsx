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
                        window.open(
                          'https://medium.com/chequer/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%ED%95%A8%EA%BB%98-%EB%A7%8C%EB%93%A4-%EB%8F%99%EB%A3%8C%EB%A5%BC-%EC%B0%BE%EC%8A%B5%EB%8B%88%EB%8B%A4-da9b1baa60fa',
                        );
                      }}
                    />
                    <a
                      href={
                        'https://medium.com/chequer/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%ED%95%A8%EA%BB%98-%EB%A7%8C%EB%93%A4-%EB%8F%99%EB%A3%8C%EB%A5%BC-%EC%B0%BE%EC%8A%B5%EB%8B%88%EB%8B%A4-da9b1baa60fa'
                      }
                      target={'_blank'}
                    >
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
