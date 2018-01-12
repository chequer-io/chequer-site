import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, List } from 'semantic-ui-react';


export class PageMain extends React.Component<iPageMainProps, iPageMainState> {
  constructor( props ) {
    super( props );

  }

  public render() {
    return (
      <Container>
        <Segment basic padded>
          <h1>Introduction</h1>
        </Segment>

        <Segment basic padded>
          <Header as='h2' dividing>Background 백그라운드</Header>
          <p>
            체커 홈페이지 프로젝트
          </p>
          <p>
            Installation instructions are provided in the <Link to='/usage'>Usage</Link> section.
          </p>
        </Segment>

        <Segment basic padded>
          <Header as='h2' dividing>React + ES6 + TS</Header>
          <p>
            The AXUI datagrid was developed using the React framework. So do not use jQuery.<br/>
            In order to adapt to rapidly changing JS development environment, we use 'babel' to create code based on ES6 + TS, and use Typescript for systematic development.
            If you're trying to build a web application with React, and you want to make all the code you use in your project complete ES6 + TS, the AXUI datagrid will be a good choice.
          </p>
        </Segment>

        <Segment basic padded>
          <Header as='h2' dividing>Expressing large amounts of data</Header>
          <p>

          </p>
        </Segment>

        <Segment basic padded>
          <Header as='h2' dividing>Formatting data</Header>
          <p>

          </p>
        </Segment>

      </Container>
    )
  }
}