import * as React from 'react';
import classNames from 'classnames';

export class FullPage extends React.Component<iFullPageProps, iFullPageState> {
  constructor(props) {
    super(props);

  }

  public render() {
    const divStyleClass = {
      'fullpage': true,
      [this.props.className]: true
    };

    let pageMinHeight = this.props.height;
    if (pageMinHeight < 600) {
      pageMinHeight = 600;
    }

    return (
      <div data-page-index={this.props.pageIndex} className={classNames(divStyleClass)} style={{minHeight: pageMinHeight}}>
        {this.props.children}
      </div>
    )
  }
}