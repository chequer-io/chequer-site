import * as React from 'react';

export class MobileNav extends React.Component<any, any> {
  constructor(props) {
    super(props);

  }

  public render() {
    const {style} = this.props;
    return (
      <div className="mobile-nav" style={style}>

      </div>
    )
  }
}