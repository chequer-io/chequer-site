import React from 'react';
import cx from 'classnames';

export class MobileNav extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.onClickMenu = this.onClickMenu.bind(this);
  }

  private onClickMenu(pId) {
    this.setState({
      active: !this.state.active,
    });
    if (pId) this.props.goPage(pId);
  }

  private Pages() {
    return (
      <>
        <div className={'content'}>
          {this.props.pages.map((p, pi) => {
            let additionalClass: any = {
              item: true,
            };
            if (pi === this.props.focusedPageIndex) {
              additionalClass.focused = true;
            }

            return (
              <a
                key={pi}
                className={cx(additionalClass)}
                onClick={e => this.onClickMenu(p.id)}
              >
                <span className={'label'}>{p.label}</span>
              </a>
            );
          })}
        </div>
        <div className={'footer'}>
          <a
            href={'https://www.facebook.com/SQLGate/'}
            target={'_blank'}
            className={'item'}
          >
            <span className="chi-facebook-solid" />
          </a>
          <a
            href={'https://medium.com/chequer'}
            target={'_blank'}
            className={'item'}
          >
            <span className="chi-medium-solid" />
          </a>
          <a
            href={'https://www.sqlgate.com/'}
            target={'_blank'}
            className={'item'}
          >
            <span className="chi-sqlgate-solid" />
          </a>
        </div>
      </>
    );
  }

  public render() {
    // let {style} = this.props;

    let style = {
      height: '50px',
    };

    if (this.state.active) {
      style.height = this.props.height;
    }

    let navClassName = {
      'mobile-nav': true,
      open: this.state.active,
    };
    let menuClassName = {
      open: this.state.active,
    };

    return (
      <div className={cx(navClassName)} style={style}>
        <div className={'nav-header'} style={{ height: '50px' }}>
          <div className={'chequer-logo'}>
            <span className="chi-chequer-full" />
          </div>
          <div className={'right-corner'}>
            <div
              data-animate-icon="hamburger"
              className={cx(menuClassName)}
              onClick={this.onClickMenu}
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className={'nav-body'} style={{ height: this.props.height - 50 }}>
          {this.state.active ? this.Pages() : null}
        </div>
      </div>
    );
  }
}
