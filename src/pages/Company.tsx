import React from 'react';
import * as img from 'assets/images';
import {Button} from 'semantic-ui-react';

export default class Company extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      popupView: false,
    };
  }

  public render() {
    let pageMinHeight = this.props.height;
    if (pageMinHeight < 600) {
      pageMinHeight = 600;
    }

    return (
      <>
        {this.state.popupView && (
          <div
            style={{
              position: 'absolute',
              zIndex: 10,
              right: 50,
              top: 100,
              maxWidth: '500px',
              textAlign: 'right',
            }}
          >
            <img src={img.jpg_notice} style={{ width: '100%' }} />
            <button
              style={{
                marginTop: '5px',
                padding: '5px 10px',
                border: '0 none',
                borderRadius: '5px',
              }}
              onClick={() => this.setState({ popupView: false })}
            >
              Close
            </button>
          </div>
        )}

        <table style={{ height: pageMinHeight }}>
          <thead>
            <tr>
              <td>
                <div className={'chequer-logo'}>
                  <span className="chi-chequer-full" />
                </div>
              </td>
            </tr>
          </thead>
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
                      WE ARE HIRING &nbsp;
                      <span className="chi-right" />
                    </a>
                  </div>
                  <h1>
                    <b>Data Management & Analysis</b>Done Right
                  </h1>
                  <article>
                    <p className={''}>
                      We help data analysis gather data insights faster with our advanced Integrated Data Analysis Environment, QueryPie.
                    </p>
                  </article>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <div className={'footer'}>
                  <a onClick={e => this.props.goPage('company-vision')}>
                    <span className="chi-mouse" />
                  </a>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
