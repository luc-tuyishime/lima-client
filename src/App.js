import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import NotFoundPage from './components/NotFound/Notfound';


function App({ isAuth }) {
  return (
    <Router>
      <Switch>
        {
          routes.map(route => <Route
            key={route.name}
            exact
            path={route.path}
            protected={route.protected}
            role={route.role}
            render={
              props => {
                document.title = route.name
                return (
                  <route.component
                    location={props.location}
                    history={props.history}
                    match={props.match}
                  />
                )
              }
            }
          />
          )
        }
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  );
}



export default App;
