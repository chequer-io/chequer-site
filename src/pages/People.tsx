import * as React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import {ProfileCard} from '../components/index'

export class People extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    let peoples = [
      {id: 'brant', name: 'Brant Hwang', job: 'CEO', extra: [
        {label: <Icon name='github' />, url: 'https://github.com/brant-hwang'},
        {label: <Icon name='facebook' />, url: 'https://www.facebook.com/tjdus3361'}
      ]},
      {id: 'benjamin', name: 'Benjamin Yang', job: 'Chief Product Engineer', extra: [
        {label: <Icon name='facebook' />, url: 'https://www.facebook.com/ysyang99'}
      ]},
      {
        id: 'thomas', name: 'Thomas Jang', job: 'Chief Product Engineer', extra: [
        {label: <Icon name='github' />, url: 'http://github.com/thomasJang'},
        {label: <Icon name='facebook' />, url: 'https://www.facebook.com/axisjtom'}
      ]
      },
      {id: 'bill', name: 'Bill Lee', job: 'Manager', extra: []},
      {id: 'cia', name: 'Cia Hong', job: 'Designer', extra: []}
    ];

    return (
      <div data-page-content="people">

        <Grid doubling container>
          <Grid.Row>
            <Grid.Column textAlign={'center'}>
              <h1>
                PEOPLE
              </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid doubling container columns={3}>
          <Grid.Row>
            {peoples.map((people, i) => {
              return <Grid.Column key={i}>
                <ProfileCard {...people} />
              </Grid.Column>
            })}
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}