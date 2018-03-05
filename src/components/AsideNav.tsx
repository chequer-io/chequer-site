import React from 'react';

export default class AsideNav extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { style } = this.props;
    return (
      <div className="aside-nav" style={style}>
        <div className={'nav-container'}>
          <a
            href={'https://www.facebook.com/SQLGate/'}
            target={'_blank'}
            className={'item'}
          >
            <span className={'label'}>facebook.com/SQLGate</span>
            <span className="chi-facebook-solid" />
          </a>
          <a
            href={'https://medium.com/chequer'}
            target={'_blank'}
            className={'item'}
          >
            <span className={'label'}>medium.com/chequer</span>
            <span className="chi-medium-solid" />
          </a>
          <a
            href={'https://www.sqlgate.com/'}
            target={'_blank'}
            className={'item'}
          >
            <span className={'label'}>SQLGate.com</span>
            <span className="chi-sqlgate-solid" />
          </a>
        </div>
      </div>
    );
  }
}
