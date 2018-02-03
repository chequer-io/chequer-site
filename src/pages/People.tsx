import * as React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import {ProfileCard} from '../components/index'

export class People extends React.Component<iCommonPageProps, iCommonPageState> {
    constructor(props) {
        super(props);

    }

    public render() {

        let peoples = [
            {
                id: 'brant', name: 'Brant Hwang', job: 'Chief Executive Officer', extra: [
                    {label: <Icon name='facebook'/>, url: 'http://www.facebook.com/tjdus3361'},
                    {label: <Icon name='linkedin'/>, url: 'http://www.linkedin.com/in/ishwang/'},
                    {label: <Icon name='github'/>, url: 'http://github.com/brant-hwang'},
                ]
            },
            {
                id: 'john', name: 'John Song', job: 'Chief Strategy Officer', extra: [
                    {label: <Icon name='facebook'/>, url: 'https://www.facebook.com/yoheon.song'},
                ]
            },
            {
                id: 'benjamin', name: 'Benjamin Yang', job: 'Chief Product Developer', extra: [
                    {label: <Icon name='facebook'/>, url: 'https://www.facebook.com/ysyang99'}
                ]
            },
            {
                id: 'thomas', name: 'Thomas Jang', job: 'Front-end Technical Director', extra: [
                    {label: <Icon name='facebook'/>, url: 'https://www.facebook.com/axisjtom'},
                    {label: <Icon name='linkedin'/>, url: 'https://www.linkedin.com/in/axisj-thomasjang'},
                    {label: <Icon name='github'/>, url: 'http://github.com/thomasJang'}
                ]
            },
            {
                id: 'bill', name: 'Bill Lee', job: 'Accounting Assistant', extra: [
                    {label: <Icon name='facebook'/>, url: 'https://www.facebook.com/hjbill'},
                    {label: <Icon name='linkedin'/>, url: 'https://www.linkedin.com/in/%ED%95%98%EC%A2%85-%EC%9D%B4-705839158/'},
                ]
            },
            {
                id: 'cia', name: 'Cia Hong', job: 'Designer', extra: [
                    {label: <Icon name='facebook'/>, url: 'https://www.facebook.com/profile.php?id=100009713476106'},
                    {label: <Icon name='linkedin'/>, url: 'https://www.linkedin.com/in/sia-hong-659839158'},
                ]
            },
            {
                id: 'may', name: 'May Jang', job: 'Localization Manager', extra: [
                    {label: <Icon name='linkedin'/>, url: 'https://www.linkedin.com/in/jina-jang-771445130/'}
                ]
            },
            {
                id: 'hong', name: 'SangHoon Hong', job: 'Legal Advisor (Lawyer)', extra: [
                    {label: <Icon name='linkedin'/>, url: 'http://people.joins.com/search/profile.aspx?pn=396804'}
                ]
            },
            {
                id: 'join', name: 'We are looking for', job: 'Chief Design Officer', extra: [
                    {label: <Icon name='medium'/>, desc: 'Job Description',  url: 'https://www.rocketpunch.com/jobs/36702/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%ED%95%A8%EA%BB%98-%EB%A7%8C%EB%93%A4-%EB%9B%B0%EC%96%B4%EB%82%9C-%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EB%A5%BC-%EC%B0%BE%EC%8A%B5%EB%8B%88%EB%8B%A4'},
                ]
            },
            {
                id: 'join', name: 'We are looking for', job: 'Chief Marketing Officer', extra: [
                    {label: <Icon name='medium'/>, desc: 'Job Description',  url: 'https://www.rocketpunch.com/jobs/36701/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%ED%95%A8%EA%BB%98-%EB%A7%8C%EB%93%A4-%EB%9B%B0%EC%96%B4%EB%82%9C-%EB%A7%88%EC%BC%80%ED%84%B0%EB%A5%BC-%EC%B0%BE%EC%8A%B5%EB%8B%88%EB%8B%A4'},
                ]
            },
            {
                id: 'join', name: 'We are looking for', job: 'Chief Product Officer', extra: [
                    {label: <Icon name='medium'/>, desc: 'Job Description', url: 'https://www.rocketpunch.com/jobs/36703/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4%EC%9D%98-%EB%AF%B8%EB%9E%98%EB%A5%BC-%ED%95%A8%EA%BB%98-%EB%A7%8C%EB%93%A4-%EB%9B%B0%EC%96%B4%EB%82%9C-%EA%B8%B0%ED%9A%8D%EC%9E%90%EB%A5%BC-%EC%B0%BE%EC%8A%B5%EB%8B%88%EB%8B%A4'},
                ]
            },
        ];

        return (
            <div data-page-content="people">

                <Grid stackable container>
                    <Grid.Row>
                        <Grid.Column textAlign={'center'}>
                            <h1>
                                PEOPLE
                            </h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid doubling container columns={3}>
                    <Grid.Row stretched>
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