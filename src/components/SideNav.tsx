import * as React from 'react';
import {NavLink} from 'react-router-dom';
import cx from 'classnames';

export class SideNav extends React.Component<iSideNavProps, iSideNavState> {
  constructor(props) {
    super(props);

  }

  public render() {
    const {style} = this.props;
    return (
        <div className="side-nav">
          <div className={'nav-container'}>
          {this.props.pages.map((p, pi) => {

            let additionalClass: any = {
              'item': true
            };
            if(pi === this.props.focusedPageIndex){
              additionalClass.focused = true;
            }

            return <NavLink
              key={pi}
              to={'/c/' + p.id}
              activeClassName='active'
              className={cx(additionalClass)}
            >
              <span className={'dot'} />
              <span className={'label'}>{p.label}</span>
            </NavLink>
          })}
          </div>
        </div>

    )
  }
}