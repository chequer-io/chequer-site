import * as React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import {SideNav} from './components'
import {MainRoute} from './route';

const RedirectToMain = () => <Redirect to='/Main' />;

export class AppRouter extends React.Component<iAppRouterProps, iAppRouterState> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <BrowserRouter>
        <div className="fullpage-wrapper">
          <SideNav />
          <Switch>
            <Route exact path='/' render={RedirectToMain} />
            <Route path='/Main' component={MainRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
