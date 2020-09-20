import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ItemListPage from "./pages/item-list-page";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ItemListPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
