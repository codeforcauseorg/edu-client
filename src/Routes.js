/* eslint-disable react/no-array-index-key */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";

const renderRoutes = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      <SwipeableRoutes replace containerStyle={{"height": "100%"}}>
        <Route
          path="/home"
          exact
          render={(props) => (
            <>
                <HomePage />
            </>
          )}
        />
        <Route
          path="/personal"
          exact
          render={(props) => (
            <>
                <CoursePage/>
            </>
          )}
        />
        <Route
          path="/wishlist"
          exact
          render={(props) => (
            <>
                <WishlistPage/>
            </>
          )}
        />
        <Route
          path="/profile"
          exact
          render={(props) => (
            <>
                <ProfilePage />
            </>
          )}
        />
      </SwipeableRoutes>
    </Switch>
  </React.Fragment>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
