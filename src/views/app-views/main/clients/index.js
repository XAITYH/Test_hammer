import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Dashboards = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/list/edit-profile/:id`} component={lazy(() => import(`./list/edit-profile`))} />
        <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/list`} />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
