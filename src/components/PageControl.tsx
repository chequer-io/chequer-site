import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

export class PageControl extends React.Component<iPageControlProps, iPageControlState> {
  constructor(props) {
    super(props);

  }

  public render() {
    return (
      <div className='page-control-wrap'>
        <Container>
          <div className='page-control'>

            {(this.props.prevPageUrl) ?
              <NavLink to={this.props.prevPageUrl} className='go-prev'>
                <span className='chi-up' />
              </NavLink>
              : null}

            {(this.props.nextPageUrl) ?
                <NavLink to={this.props.nextPageUrl} className='go-next'>
                  <span className='chi-down' />
                </NavLink>
              : null}

          </div>
        </Container>
      </div>
    )
  }
}