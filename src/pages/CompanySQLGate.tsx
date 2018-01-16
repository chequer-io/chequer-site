import * as React from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

export class CompanySQLGate extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="company-sqlgate">

        <h1>SQLGate</h1>

        <p>
사람이 가장중요한 회사.
        </p>

      </div>
    )
  }
}