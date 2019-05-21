import React from 'react';
import * as img from 'assets/images';

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
                  <h1>WE TAKE THE LEAD ON TECHNOLOGY</h1>
                  <article>
                    <p className={''}>
                      We believe that technology can change the world for the
                      better! So we put our best effort towards making
                      high-quality software you’ve dreamed of working with using
                      the newest technology.
                    </p>
                  </article>
                  <p className={'h1Label'}>
                    OUR PRODUCT FOSTERS SUCCESS FOR YOUR BUSINESS
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
