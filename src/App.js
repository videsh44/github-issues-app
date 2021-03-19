import { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import history from './history';

function App() {
  return (
    <Suspense
    //  fallback={<Loading />}
    >
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/github-issues-app" exact component={MainPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
