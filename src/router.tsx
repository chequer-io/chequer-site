import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SideNav } from './components'
import { PageMain } from './pages';

const RedirectToMain = () => <Redirect to='/Main' />;

export class AppRouter extends React.Component<iAppRouterProps, iAppRouterState> {
  constructor( props ) {
    super( props );

    this.state = {
    };
  }

  public render() {
    return (
      <BrowserRouter>

        <div>
          <SideNav />
          <div>

            <Switch>
              <Route exact path='/' render={RedirectToMain} />
              <Route path='/Main' component={PageMain} />
            </Switch>

          </div>
        </div>

      </BrowserRouter>
    );
  }
}
