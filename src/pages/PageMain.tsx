import * as React from 'react';
import {Link} from 'react-router-dom';
import throttle from 'lodash-es/throttle';
import {Header} from 'semantic-ui-react';
import {FullPage} from '../components';

export class PageMain extends React.Component<iPageMainProps, iPageMainState> {

  private throttled_updateDimensions: any;

  constructor(props) {
    super(props);

    const rect = document.getElementsByTagName("body")[0]['getBoundingClientRect']();
    this.state = {
      width: rect.width,
      height: rect.height
    };

    this.throttled_updateDimensions = throttle(this.updateDimensions.bind(this), 100);
    window.addEventListener('resize', this.throttled_updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.throttled_updateDimensions);
  }

  // User Functions
  private updateDimensions() {
    const rect = document.getElementsByTagName("body")[0]['getBoundingClientRect']();
    this.setState({
      width: rect.width,
      height: rect.height
    });
  }

  public render() {

    const FullPageProps = {
      width: this.state.width,
      height: this.state.height
    };

    return (
      <>
      <FullPage {...FullPageProps}>
        <h1>Introduction</h1>

        {this.state.height}
      </FullPage>

      <FullPage {...FullPageProps}>
        <Header as='h2' dividing>Background 백그라운드</Header>
        <p>
          체커 홈페이지 프로젝트
        </p>
        <p>
          Installation instructions are provided in the <Link to='/usage'>Usage</Link> section.
        </p>
      </FullPage>

      <FullPage {...FullPageProps}>
        <Header as='h2' dividing>React + ES6 + TS</Header>
        <p>
          The AXUI datagrid was developed using the React framework. So do not use jQuery.<br />
          In order to adapt to rapidly changing JS development environment, we use 'babel' to create code based on ES6 + TS, and use Typescript for systematic development.
          If you're trying to build a web application with React, and you want to make all the code you use in your project complete ES6 + TS, the AXUI datagrid will be a good choice.
        </p>
      </FullPage>

      <FullPage {...FullPageProps}>
        <Header as='h2' dividing>Expressing large amounts of data</Header>
        <p>

        </p>
      </FullPage>

      <FullPage {...FullPageProps}>
        <Header as='h2' dividing>Formatting data</Header>
        <p>

        </p>
      </FullPage>

      </>
    )
  }
}