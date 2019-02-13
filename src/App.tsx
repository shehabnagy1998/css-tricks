import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';

const Form = lazy(() => import('./components/form/Form'));

class App extends Component {
  render() {

    const loader = <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border text-primary"></div>
    </div>

    return (
      <div className="App">
        <Switch>
          <Route path="/form">
            <Suspense fallback={loader}>
              <Form />
            </Suspense>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
