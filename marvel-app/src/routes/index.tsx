import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Description from '../pages/Description';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Characters} />
    <Route path="/characters" component={Characters} />
    <Route path="/description" component={Description} />

  </Switch>
);
export default Routes;
