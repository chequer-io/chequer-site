import * as React from 'react';
import {Container} from 'semantic-ui-react';

export class Culture extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="culture">
        <Container>
          <h1>CULTURE</h1>

          <p>
            사람이 가장중요한 회사.
          </p>
        </Container>
      </div>
    )
  }
}