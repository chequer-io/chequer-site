import * as React from 'react';

export class FullPage extends React.Component<iFullPageProps, iFullPageState> {
  constructor( props ) {
    super( props );

  }

  public render() {
    return (
      <div className='fullpage' style={{height: this.props.height}}>
        {this.props.children}
      </div>
    )
  }
}