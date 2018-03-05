import React from 'react';
import cx from 'classnames';

export default class SideNav extends React.Component<
  iSideNavProps,
  iSideNavState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { style } = this.props;

    // console.log(this.props.focusedPageIndex);

    return (
      <div className="side-nav" style={style}>
        <div className={'nav-container'}>
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
                onClick={e => this.props.goPage(p.id)}
              >
                <span className={'dot'} />
                <span className={'label'}>{p.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
