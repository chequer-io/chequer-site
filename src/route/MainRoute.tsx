import * as React from 'react';
import get from 'lodash-es/get';
import forEach from 'lodash-es/forEach';
import findIndex from 'lodash/findIndex';
import assign from 'lodash-es/assign';
import {Container} from 'semantic-ui-react';
import {AsideNav, Footer, FullPage, MobileNav, SideNav} from '../components';
import * as Page from '../pages';
import * as ReactDOM from 'react-dom';
import cx from 'classnames';

export class MainRoute extends React.Component<iPageMainProps, iPageMainState> {

  private pages: {
    id: string,
    component: any,
    label: string
  }[];
  private pageRefs: any[];
  private pagePositions: any[];

  constructor(props) {
    super(props);

    const contentId = get(props, 'match.params.contentId');

    this.pages = [
      {id: 'company', label: 'CHEQUER', component: Page.Company},
      {id: 'company-vision', label: 'VISION', component: Page.CompanyVision},
      {id: 'company-SQLGate', label: 'PRODUCT', component: Page.CompanySQLGate},
      {id: 'culture', label: 'CULTURE', component: Page.Culture},
      {id: 'people', label: 'PEOPLE', component: Page.People},
      //{id: 'recruit', label: 'RECRUIT', component: Page.Recruit},
      {id: 'contact', label: 'CONTACT', component: Page.Contact}
    ];

    const {
      currentPageIndex,
      prevPageUrl,
      nextPageUrl
    } = this.getControlPageInfo(contentId);

    this.state = {
      locationKey: '',
      contentId: contentId,
      currentPageIndex: currentPageIndex || 0,
      focusedPageIndex: currentPageIndex || 0,
      prevPageUrl,
      nextPageUrl
    };

    this.pageRefs = [];
    this.pagePositions = [];
  }

  public componentWillReceiveProps(nextProps) {
    const locationKey = get(nextProps, 'location.key');
    const contentId = get(nextProps, 'match.params.contentId');
    let newState = {};

    if (this.props.scrollTop !== nextProps.scrollTop) {
      let focusedPageIndex = 0;
      let minv = this.props.height;
      for (let i = 0, l = this.pagePositions.length; i < l; i++) {
        if (minv > Math.abs(nextProps.scrollTop - this.pagePositions[i].sy)) {
          minv = Math.abs(nextProps.scrollTop - this.pagePositions[i].sy);
          focusedPageIndex = i;
        }
      }

      newState = assign(newState, {
        focusedPageIndex: focusedPageIndex
      });
    }
    else if (this.props.width !== nextProps.width || this.props.height !== nextProps.height) {
      // 아무것도 안하기.
    }
    else if (this.state.locationKey !== locationKey) {
      const {
        currentPageIndex,
        prevPageUrl,
        nextPageUrl
      } = this.getControlPageInfo(contentId);

      newState = assign(newState, {
        locationKey: locationKey,
        contentId: contentId,
        currentPageIndex: currentPageIndex || 0,
        focusedPageIndex: currentPageIndex || 0,
        prevPageUrl,
        nextPageUrl
      });

      this.props.fnScrollTo(this.pagePositions[currentPageIndex].sy);
    }

    this.calcPagePositions();
    this.setState(newState);
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

  public componentDidMount() {
    let pageRefs: {
      pIndex: number;
      dom: any
    }[] = [];

    forEach(this.refs, (value, key) => {
      pageRefs.push({
        pIndex: Number(key),
        dom: ReactDOM.findDOMNode(value)
      });
    });

    this.onDidMount(pageRefs);
  }

  private onDidMount(pageRefs) {
    this.pageRefs = pageRefs;

    setTimeout(() => {
      this.calcPagePositions();
    }, 100);

  }

  private calcPagePositions() {
    let _y: number = 0;
    this.pagePositions = [];

    forEach(this.pageRefs, (value, key) => {
      this.pagePositions.push({
        pIndex: value.pIndex,
        sy: _y,
        ey: _y = _y + value.dom.getBoundingClientRect().height
      });
    });
  }

  public render() {

    const FullPageProps = {
      width: this.props.width,
      height: this.props.height
    };
    let wrapperClass: any = {
      'fullpage-wrapper': true,
      ['wrapper-' + this.state.contentId]: true
    };

    return (
      <div className={cx(wrapperClass)}>

        {this.pages.map((p, pi) => {

          let additionalClass: any = {
            ['page-' + p.id]: true
          };
          if (pi === this.state.focusedPageIndex) {
            additionalClass.focused = true;
          }

          return <FullPage key={pi}
                           {...FullPageProps}
                           className={cx(additionalClass)}
                           pageIndex={pi}
                           ref={'' + pi}>
            <p.component height={this.props.height} />
          </FullPage>
        })}
        <Footer />

        <div className={'nav-fixed-container'}>
          <Container>
            <SideNav focusedPageIndex={this.state.focusedPageIndex} pages={this.pages} style={{height: this.props.height}} />
            <AsideNav style={{height: this.props.height}} />
          </Container>
        </div>

        <MobileNav height={this.props.height} focusedPageIndex={this.state.focusedPageIndex} pages={this.pages} />

      </div>
    )
  }
}