import React, { Component, Suspense, lazy } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router';

const Modal = lazy(() => import('./components/modal/Modal'));

class App extends Component {
  render() {

    const loader = <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border text-primary"></div>
    </div>

    return (
      <div className="App">
        <Switch>
          <Route path="/modal">
            <Suspense fallback={loader}><Modal /></Suspense>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
