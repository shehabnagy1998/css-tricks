import React, { Component, Suspense, lazy } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

const BrokenImage = lazy(() => import('./components/broken-image/BrokenImage'));

class App extends Component {
  render() {

    const loader = <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border text-primary"></div>
    </div>

    return (
      <div className="App">
        <Switch>
          <Route exact path="/broken">
            <Suspense fallback={loader}>
              <BrokenImage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
