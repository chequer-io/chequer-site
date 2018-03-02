import * as React from 'react';
import {hot} from 'react-hot-loader';
import throttle from 'lodash-es/throttle';
import {MainRoute} from './route';

const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

function windowScrollY(to: number, duration: number) {
  /**
   *
   * @param {number} t - current time
   * @param {number} b - start value
   * @param {number} c - change in value
   * @param {number} d - duration
   * @return {number}
   */
  const easeInOutQuad = function (t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const start: number = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  const change: number = to - start;

  let currentTime: number = 0;
  let increment: number = 20;

  const animateScroll = function () {
    currentTime += increment;
    window.scrollTo(0, easeInOutQuad(currentTime, start, change, duration));
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

class AppRouter extends React.Component<iAppRouterProps, iAppRouterState> {

  private throttled_updateDimensions: any;
  private throttled_windowScroll: any;
  private innerState: any;

  constructor(props) {
    super(props);

    const rect = document.getElementsByTagName("body")[0]['getBoundingClientRect']();

    this.state = {
      width: rect.width,
      height: rect.height,
      scrollTop: 0
    };

    this.innerState = {
      mounted: false,
      onMountedCallBack: [],
      willScrollTop: 0
    };

    this.scrollTo = this.scrollTo.bind(this);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.throttled_updateDimensions);
    window.removeEventListener('scroll', this.throttled_windowScroll);
  }

  // User Functions
  private updateDimensions() {
    const rect = document.getElementsByTagName("body")[0]['getBoundingClientRect']();
    this.setState({
      width: rect.width,
      height: rect.height
    });
  }

  private onWindowScroll() {
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    let scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    this.setState({
      scrollTop: scrollTop
    });
  }

  private scrollTo(y) {
    if (this.innerState.mounted) {
      windowScrollY(y, 600);
    } else {
      /*
      this.innerState.onMountedCallBack.push({
        fn: this.scrollTo,
        arg: [y]
      });
      */
    }
  }

  public componentDidMount() {
    this.innerState.mounted = true;


    this.throttled_updateDimensions = throttle(this.updateDimensions.bind(this), 100);
    window.addEventListener('resize', this.throttled_updateDimensions);
    this.throttled_windowScroll = throttle(this.onWindowScroll.bind(this), 300);
    window.addEventListener('scroll', this.throttled_windowScroll);

    this.onWindowScroll();
  }

  public render() {

    const TossProps = {
      width: this.state.width,
      height: this.state.height,
      scrollTop: this.state.scrollTop
    };

    return (
      <MainRoute {...TossProps} fnScrollTo={this.scrollTo} />
    );
  }
}

export default hot(module)(AppRouter);