import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import {ProfileCard} from 'components/index';

export default class People extends React.Component<
  iCommonPageProps,
  iCommonPageState
> {
  constructor(props) {
    super(props);
  }

  public render() {
    let peoples = [
      {
        id: 'brant',
        name: 'Brant Hwang',
        job: 'Chief Executive Officer',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'http://www.facebook.com/tjdus3361',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'http://www.linkedin.com/in/ishwang/',
          },
          {
            label: <Icon name="github" />,
            url: 'http://github.com/brant-hwang',
          },
        ],
      },
      {
        id: 'benjamin',
        name: 'Benjamin Yang',
        job: 'Head of SQLGate Dev',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/ysyang99',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/benjamin-yang-4b0609159/',
          },
        ],
      },
      {
        id: 'thomas',
        name: 'Thomas Jang',
        job: 'Head of Software Dev',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/axisjtom',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/axisj-thomasjang',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/thomasJang',
          },
        ],
      },
      {
        id: 'woo',
        name: 'Woo Gim',
        job: 'Head of QueryPie Dev',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/engross.gim',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/dongwoo-gim-3b5b82111/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/gimdongwoo',
          },
        ],
      },
      {
        id: 'bill',
        name: 'Bill Lee',
        job: 'Manager',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/hjbill',
          },
          {
            label: <Icon name="linkedin" />,
            url:
              'https://www.linkedin.com/in/%ED%95%98%EC%A2%85-%EC%9D%B4-705839158/',
          },
        ],
      },
      {
        id: 'cia',
        name: 'Cia Hong',
        job: 'Designer',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/profile.php?id=100009713476106',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/sia-h-699838158/',
          },
        ],
      },
      {
        id: 'kelly',
        name: 'Kelly Kim',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/hyemeei',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/hyemeei/',
          },
          { label: <Icon name="github" />, url: 'https://github.com/aeei' },
        ],
      },
      {
        id: 'kevin',
        name: 'Kevin So',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/sohyeonseop',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/sohyeonseop/',
          },
          { label: <Icon name="github" />, url: 'https://github.com/iodes' },
        ],
      },
      {
        id: 'hong',
        name: 'Paul Hong',
        job: 'Legal Director / Lawyer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'http://people.joins.com/search/profile.aspx?pn=396804',
          },
        ],
      },
      {
        id: 'robb',
        name: 'Robb Lee',
        job: 'SQLGate Product Manager',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/robb-lee-285089164/',
          },
        ],
      },
      {
        id: 'ellie',
        name: 'Ellie Hyeon',
        job: 'Head of Design',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/jisook.hyeon',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/visualdesigner-hyeon',
          },
        ],
      },
      {
        id: 'issac',
        name: 'Issac Ko',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/jaecheol-ko-8016b116a/',
          },
        ],
      },
      {
        id: 'celine',
        name: 'Celine Lee',
        job: 'Growth Manager',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/sunminlee02/',
          },
        ],
      },
      {
        id: 'ella',
        name: 'Ella Lee',
        job: 'QueryPie Product Manager',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/umbr-ella/',
          },
        ],
      },
      {
        id: 'mahsa',
        name: 'Mahsa Abbasi',
        job: 'Designer',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/mahsabbasi',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/mahsa-abbasi-36529463/',
          },
        ],
      },
      {
        id: 'david',
        name: 'David Joo',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/sung-hun-joo-6bb5a2a7/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/jshyoung90',
          },
        ],
      },
      {
        id: 'peter',
        name: 'Peter Shin',
        job: 'Head of Global Business',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/shndon0220/',
          },
        ],
      },
      {
        id: 'yan',
        name: 'Yan Kwon',
        job: 'QueryPie Studio Product Manager',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/soyeonkwonux/',
          },
        ],
      },
    ];

    peoples.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return (
      <div data-page-content="people">
        <Grid stackable container>
          <Grid.Row>
            <Grid.Column textAlign={'center'}>
              <h1>PEOPLE</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid doubling container columns={4}>
          <Grid.Row>
            {peoples.map((people, i) => {
              return (
                <Grid.Column key={i}>
                  <ProfileCard {...people} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
