import React from 'react';
import { Switch, Route } from 'react-router';
import View from 'components/View';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <View location="home" />
      </Route>
    </Switch>
  );
};

export default Routes;
