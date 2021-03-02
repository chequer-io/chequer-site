import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { ProfileCard } from 'components/index';

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
        job: 'Technical Director',
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
        job: 'Technical Director',
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
        id: 'keis',
        name: 'Keis Uhm',
        job: 'Chief Technology Officer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url:
              'https://www.linkedin.com/in/%EA%B4%91%ED%98%84-%EC%97%84-a1bb1674/',
          },
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
        id: 'paul',
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
        job: 'Product Manager',
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
        job: 'Product Manager',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/umbr-ella/',
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
        id: 'tony',
        name: 'Tony Jang',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url:
              'https://www.linkedin.com/in/%EC%9C%A0%ED%83%81-%EC%9E%A5-822bb0157/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/tony-jang',
          },
        ],
      },
      {
        id: 'evan',
        name: 'Evan Choi',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/jinyong.choi.338',
          },
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/evan-choi-b63b27147/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/evan-choi',
          },
        ],
      },
      {
        id: 'rogan',
        name: 'Rogan Oh',
        job: 'Growth Manager',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/rogan-oh-7b70671ab/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/roganOh',
          },
        ],
      },
      {
        id: 'eddy',
        name: 'Eddy Jeon',
        job: 'Software Developer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/eddy-jeon-a56a681a9/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/Eddy-Jeon',
          },
        ],
      },
      {
        id: 'mitch',
        name: 'Mitch No',
        job: 'Growth Manager',
        extra: [],
      },
      {
        id: 'noel',
        name: 'Noel Kim',
        job: 'Software Engineer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url:
              'https://www.linkedin.com/in/%EB%AF%BC%ED%98%81-%EA%B9%80-4358531b1/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/nnnnoel',
          },
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/zusinShinpei/',
          },
        ],
      },
      {
        id: 'morris',
        name: 'Morris Hong',
        job: 'Software Engineer',
        extra: [
          {
            label: <Icon name="linkedin" />,
            url: 'https://www.linkedin.com/in/eunmo-hong-797a1b184/',
          },
          {
            label: <Icon name="github" />,
            url: 'https://github.com/MorrisHong',
          },
          {
            label: <Icon name="facebook" />,
            url: 'https://www.facebook.com/profile.php?id=100039157392742',
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
