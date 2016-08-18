import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

import UserList from '../components/UserList'
import UserUpdate from '../components/UserUpdate'


const Routes = ({ history }) =>
    (
      <Router history={history}>
        <Route path="/">
          <Route path="list" component={UserList}></Route>
          <Route path="update" component={UserUpdate}></Route>
        </Route>
      </Router>
    );

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;