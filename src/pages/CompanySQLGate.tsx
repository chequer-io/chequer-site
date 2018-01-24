import * as React from 'react';

export class CompanySQLGate extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="company-sqlgate">

        <div className={'key-box'}>

          <h1>SQLGate</h1>

          <p>
            데이터베이스를 다루는 가장 똑똑한 방법.
          </p>

        </div>

        <div className={'features-box'}>

        </div>

        <div className={'client-box'}>

        </div>



      </div>
    )
  }
}