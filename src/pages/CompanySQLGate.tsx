import * as React from 'react';
import {Container} from 'semantic-ui-react';

export class CompanySQLGate extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="company-sqlgate">

        <div className={'key-box'}>
          <Container>
            <h1>SQLGate</h1>

            <p>
              데이터베이스를 다루는 가장 똑똑한 방법.
            </p>
          </Container>
        </div>

        <div className={'features-box'}>
          <Container>
          </Container>
        </div>

        <div className={'client-box'}>
          <Container>
          </Container>
        </div>

      </div>
    )
  }
}