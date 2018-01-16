import * as React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import throttle from 'lodash-es/throttle';
import {MainRoute} from './route';

const RedirectToMain = () => <Redirect to='/c/company' />;

export class AppRouter extends React.Component<iAppRouterProps, iAppRouterState> {

  private throttled_updateDimensions: any;

  constructor(props) {
    super(props);

    const rect = document.getElementsByTagName("body")[0]['getBoundingClientRect']();
    this.state = {
      width: rect.width,
      height: rect.height
    };

    this.throttled_updateDimensions = throttle(this.updateDimensions.bind(this), 100);
    window.addEventListener('resize', this.throttled_updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.throttled_updateDimensions);
  }

  // User Functions
  private updateDimensions() {
    const rect = document.getElementsByTagName("body")[0]['getBoundingClientRect']();
    this.setState({
      width: rect.width,
      height: rect.height
    });
  }

  public componentDidMount() {

  }

  public render() {

    const TossProps = {
      width: this.state.width,
      height: this.state.height
    };

    return (
      <BrowserRouter>

        <Switch>
          <Route exact path='/' render={RedirectToMain} />
          <Route path='/c/:contentId' render={(props) => (
            <MainRoute {...props} {...TossProps} />
          )} />
        </Switch>

      </BrowserRouter>
    );
  }
}
