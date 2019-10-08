import React from 'react';
import get from 'lodash-es/get';
import forEach from 'lodash-es/forEach';
import findIndex from 'lodash/findIndex';
import assign from 'lodash-es/assign';
import { Container } from 'semantic-ui-react';
import { AsideNav, Footer, FullPage, MobileNav, SideNav } from 'components';
import * as Page from 'pages';
import ReactDOM from 'react-dom';
import cx from 'classnames';

export class MainRoute extends React.Component<iPageMainProps, iPageMainState> {
  private pages: {
    id: string;
    component: any;
    label: string;
  }[];
  private pageRefs: any[];
  private pagePositions: any[];
  private mounted: boolean;

  constructor(props) {
    super(props);

    const contentId = get(props, 'match.params.contentId');

    this.pages = [
      { id: 'company', label: 'CHEQUER', component: Page.Company },
      { id: 'company-vision', label: 'VISION', component: Page.CompanyVision },
      {
        id: 'company-SQLGate',
        label: 'PRODUCT',
        component: Page.CompanySQLGate,
      },
      { id: 'culture', label: 'CULTURE', component: Page.Culture },
      { id: 'people', label: 'PEOPLE', component: Page.People },
      //{id: 'recruit', label: 'RECRUIT', component: Page.Recruit},
      { id: 'contact', label: 'CONTACT', component: Page.Contact },
    ];

    this.pageRefs = [];
    this.pagePositions = [];
    this.mounted = false;

    const focusedPageIndex = this.getFocusPageIndexByScrollTop(
      this.props.scrollTop,
    );

    this.state = {
      locationKey: '',
      contentId: contentId,
      currentPageIndex: focusedPageIndex || 0,
      focusedPageIndex: focusedPageIndex || 0,
    };

    this.goPage = this.goPage.bind(this);
  }

  private getFocusPageIndexByScrollTop(scrollTop: number): number {
    let focusedPageIndex = -1;
    let mar = this.props.height / 5;

    for (let i = 0, l = this.pagePositions.length; i < l; i++) {
      if (
        this.pagePositions[i].sy - mar <= scrollTop &&
        scrollTop < this.pagePositions[i].ey - mar
      ) {
        focusedPageIndex = i;
      }
    }

    return focusedPageIndex;
  }

  public componentWillReceiveProps(nextProps) {
    let newState = {};

    if (this.props.scrollTop !== nextProps.scrollTop) {
      newState = assign(newState, {
        focusedPageIndex: this.getFocusPageIndexByScrollTop(
          nextProps.scrollTop,
        ),
      });
    }

    this.setState(newState);
  }

  public componentDidMount() {
    let pageRefs: {
      pIndex: number;
      dom: any;
    }[] = [];

    forEach(this.refs, (value, key) => {
      pageRefs.push({
        pIndex: Number(key),
        dom: ReactDOM.findDOMNode(value),
      });
    });

    this.mounted = true;
    this.onDidMount(pageRefs);
  }

  private onDidMount(pageRefs) {
    this.pageRefs = pageRefs;

    /*
    document.addEventListener("DOMContentLoaded", (e) => {
      // console.log("DOMContentLoaded");
    });
    */

    window.addEventListener('load', e => {
      // console.log("All resources finished loading!");
      this.calcPagePositions();

      if (window.location && window.location.hash) {
        const pId = window.location.hash.slice(1);
        const currentPageIndex = findIndex(this.pages, p => {
          return p.id === pId;
        });
        this.props.fnScrollTo(this.pagePositions[currentPageIndex].sy);
      }
    });
  }

  private calcPagePositions() {
    let _y: number = 0;
    this.pagePositions = [];

    forEach(this.pageRefs, (value, key) => {
      this.pagePositions.push({
        pIndex: value.pIndex,
        sy: _y,
        ey: (_y = _y + value.dom.getBoundingClientRect().height),
      });
    });
  }

  private goPage(pId) {
    this.calcPagePositions();
    let currentPageIndex = findIndex(this.pages, p => {
      return p.id === pId;
    });

    window.history.pushState(
      {},
      this.pages[currentPageIndex].id,
      '#' + this.pages[currentPageIndex].id,
    );
    this.props.fnScrollTo(this.pagePositions[currentPageIndex].sy);
  }

  public render() {
    const FullPageProps = {
      width: this.props.width,
      height: this.props.height,
    };
    let wrapperClass: any = {
      'fullpage-wrapper': true,
      ['wrapper-' + this.state.contentId]: true,
    };

    return (
      <div className={cx(wrapperClass)}>
        {this.pages.map((p, pi) => {
          let additionalClass: any = {
            ['page-' + p.id]: true,
          };
          if (pi === this.state.focusedPageIndex) {
            additionalClass.focused = true;
          }

          return (
            <FullPage
              key={pi}
              {...FullPageProps}
              className={cx(additionalClass)}
              pageIndex={pi}
              ref={'' + pi}
            >
              <p.component height={this.props.height} goPage={this.goPage} />
            </FullPage>
          );
        })}
        <Footer />

        <div className={'nav-fixed-container'}>
          <Container>
            <SideNav
              focusedPageIndex={this.state.focusedPageIndex}
              pages={this.pages}
              style={{ height: this.props.height }}
              goPage={this.goPage}
            />
            <AsideNav style={{ height: this.props.height }} />
          </Container>
        </div>

        <MobileNav
          height={this.props.height}
          focusedPageIndex={this.state.focusedPageIndex}
          pages={this.pages}
          goPage={this.goPage}
        />
      </div>
    );
  }
}
