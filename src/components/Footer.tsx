import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

export class Footer extends React.Component<iPageControlProps, iPageControlState> {
  constructor(props) {
    super(props);

  }

  public render() {
    return (
      <div className='page-footer'>
        <Container>

        </Container>
      </div>
    )
  }
}