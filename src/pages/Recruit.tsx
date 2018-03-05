import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';

export default class Recruit extends React.Component<
  iCommonPageProps,
  iCommonPageState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div data-page-content="culture">
        <Grid doubling container>
          <Grid.Row>
            <Grid.Column textAlign={'center'}>
              <h1>RECRUIT</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid container doubling columns={2}>
          <Grid.Row stretched>
            <Grid.Column>
              <Card fluid>
                <div style={{ height: '300px' }} />

                <Card.Content>
                  <Card.Header>
                    <span className="chi-culture-crew" />
                    &nbsp; DESIGNER
                  </Card.Header>
                  <Card.Description>디자이너를 모십니다.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button secondary>APPLY</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <div style={{ height: '300px' }} />

                <Card.Content>
                  <Card.Header>
                    <span className="chi-culture-crew" />
                    &nbsp; BUSINESS PLANER
                  </Card.Header>
                  <Card.Description>기획자를 모십니다.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button secondary>APPLY</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid>
                <div style={{ height: '300px' }} />

                <Card.Content>
                  <Card.Header>
                    <span className="chi-culture-crew" />
                    &nbsp; MARKETER
                  </Card.Header>
                  <Card.Description>마케터를 모십니다.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button secondary>APPLY</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
