import * as React from 'react';
import cx from 'classnames';

export class MobileNav extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.onClickMenu = this.onClickMenu.bind(this);
  }

  private onClickMenu(e) {
    this.setState({
      active: !this.state.active
    });
  }

  public render() {
    // let {style} = this.props;

    let style = {
      height: '50px'
    };

    if (this.state.active) {
      style.height = this.props.height;
    }

    let menuClassName = {
      open: this.state.active
    };

    return (
      <div className="mobile-nav" style={style}>
        <div className={'nav-header'}>
          <div className={'chequer-logo'}>
            <span className='chi-chequer-full' />
          </div>
          <div className={'right-corner'}>
            <div data-animate-icon="hamburger" className={cx(menuClassName)} onClick={this.onClickMenu}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className={'nav-body'}>

        </div>
      </div>
    )
  }
}