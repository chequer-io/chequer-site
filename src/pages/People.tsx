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
                id: 'hong', name: 'SangHun Hong', job: 'Legal Advisor (Lawyer)', extra: [
                    {label: <Icon name='linkedin'/>, url: 'http://people.joins.com/search/profile.aspx?pn=396804'}
                ]
            }
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

                <Grid doubling container columns={4}>
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