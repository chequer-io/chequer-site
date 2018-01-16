import * as React from 'react';
import classNames from 'classnames';
import get from 'lodash-es/get';
import {Container} from 'semantic-ui-react';
import {FullPage, SideNav} from '../components';
import * as Page from '../pages';

export class MainRoute extends React.Component<iPageMainProps, iPageMainState> {

  private pages: any;
  private contentId: string;

  constructor(props) {
    super(props);

    this.contentId = get(props, 'match.params.contentId');

    this.pages = {
      'company': Page.Company,
      'company-vision': Page.CompanyVision,
      'company-SQLGate': Page.CompanySQLGate,
      'people': Page.People,
      'culture': Page.Culture,
      'contact': Page.Contact,
      'recruit': Page.Recruit
    };

    this.state = {
      currentPage: 0
    };
  }

  public componentWillReceiveProps(nextProps) {
    // console.log(get(nextProps, 'match.params.contentId'));
    this.contentId = get(nextProps, 'match.params.contentId');
  }

  public render() {

    const FullPageProps = {
      width: this.props.width,
      height: this.props.height
    };
    const Page = this.pages[this.contentId];

    let pageClassNames = {
      'fullpage-wrapper': true,
      ['page-' + this.contentId]: true
    };

    return (
      <div className={classNames(pageClassNames)} style={{width: this.props.width, height: this.props.height}}>
        <Container>
          <SideNav />

          <div>
            <FullPage {...FullPageProps}>
              <Page />
            </FullPage>
          </div>

        </Container>
      </div>
    )
  }
}