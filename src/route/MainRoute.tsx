import * as React from 'react';
import classNames from 'classnames';
import createHistory from 'history/createBrowserHistory';
import get from 'lodash-es/get';
import findIndex from 'lodash/findIndex';
import {Container} from 'semantic-ui-react';
import {FullPage, PageControl, SideNav} from '../components';
import * as Page from '../pages';

const history = createHistory({
  forceRefresh: false
});

export class MainRoute extends React.Component<iPageMainProps, iPageMainState> {

  private pages: [{
    id: string,
    component: any
  }];

  constructor(props) {
    super(props);

    const contentId = get(props, 'match.params.contentId');

    this.pages = [
      {id: 'company', component: Page.Company},
      {id: 'company-vision', component: Page.CompanyVision},
      {id: 'company-SQLGate', component: Page.CompanySQLGate},
      {id: 'people', component: Page.People},
      {id: 'culture', component: Page.Culture},
      {id: 'contact', component: Page.Contact},
      {id: 'recruit', component: Page.Recruit}
    ];

    const {
      currentPageIndex,
      prevPageUrl,
      nextPageUrl
    } = this.getControlPageInfo(contentId);

    this.state = {
      contentId: contentId,
      currentPageIndex: currentPageIndex || 0,
      prevPageUrl,
      nextPageUrl
    };
  }

  public componentWillReceiveProps(nextProps) {
    const contentId = get(nextProps, 'match.params.contentId');
    const {
      currentPageIndex,
      prevPageUrl,
      nextPageUrl
    } = this.getControlPageInfo(contentId);

    this.setState({
      contentId: contentId,
      currentPageIndex: currentPageIndex || 0,
      prevPageUrl,
      nextPageUrl
    });
  }

  private getControlPageInfo(contentId: string) {
    let currentPageIndex = findIndex(this.pages, p => {
      return p.id === contentId;
    });
    let prevPageUrl, nextPageUrl;

    if (currentPageIndex > 0) {
      prevPageUrl = '/c/' + this.pages[currentPageIndex - 1].id;
    }
    if (currentPageIndex < this.pages.length - 1) {
      nextPageUrl = '/c/' + this.pages[currentPageIndex + 1].id;
    }

    return {
      currentPageIndex,
      prevPageUrl,
      nextPageUrl
    }
  }

  public render() {

    const FullPageProps = {
      width: this.props.width,
      height: this.props.height
    };
    const Page = this.pages[this.state.currentPageIndex].component;

    let pageClassNames = {
      'fullpage-wrapper': true,
      ['page-' + this.state.contentId]: true
    };

    return (
      <div className={classNames(pageClassNames)} style={{width: this.props.width, height: this.props.height}}>
        <Container>

          <FullPage {...FullPageProps}>
            <Page />
          </FullPage>

          <SideNav currentPageIndex={this.state.currentPageIndex} />
          <PageControl prevPageUrl={this.state.prevPageUrl} nextPageUrl={this.state.nextPageUrl} />

        </Container>
      </div>
    )
  }
}