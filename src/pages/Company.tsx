import React from 'react';
import * as img from 'assets/images';

export default class Company extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      popupView: true,
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
                  {/*
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
                  */}
                  <h1>
                    <b>Data Access Control & Audit Trails</b>Done Right
                  </h1>
                  <article>
                    <p className={''}>
                      The Most Innovated Cloud Database Management Company
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
                  <a onClick={(e) => this.props.goPage('company-vision')}>
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
