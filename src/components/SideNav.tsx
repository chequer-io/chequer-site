import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

export class SideNav extends React.Component<iSideNavProps, iSideNavState> {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  private handleItemClick() {

  }

  public render() {
    const {style} = this.props;
    return (
      <Menu vertical inverted style={{...style}} data-page-menu>
        <Menu.Item>
          <div className="logo">CHEQUER</div>
        </Menu.Item>
        <div className="menu-container">
          <Menu.Item as={NavLink} to='/c/company' activeClassName='active'>
            Company
          </Menu.Item>
          <Menu.Item>
            <Menu.Menu>
              <Menu.Item as={NavLink} to='/c/company-vision' activeClassName='active'>
                Vision
              </Menu.Item>
              <Menu.Item as={NavLink} to='/c/company-SQLGate' activeClassName='active'>
                SQLGate
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item as={NavLink} to='/c/people' activeClassName='active'>
            People
          </Menu.Item>
          <Menu.Item as={NavLink} to='/c/culture' activeClassName='active'>
            Culture
          </Menu.Item>
          <Menu.Item as={NavLink} to='/c/contact' activeClassName='active'>
            Contact
          </Menu.Item>
          <Menu.Item as={NavLink} to='/c/recruit' activeClassName='active'>
            Recruit
          </Menu.Item>
        </div>

        <div className="menu-footer">
          <a href='https://www.facebook.com/SQLGate/' target='_blank'><span className="chi-facebook"></span></a>
          <a href='https://medium.com/chequer' target='_blank'><span className="chi-medium"></span></a>
          <a href='https://www.sqlgate.com/' target='_blank'><span className="chi-SQLGate"></span></a>
        </div>
      </Menu>
    )
  }
}