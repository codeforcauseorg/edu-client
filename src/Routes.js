/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";
import CourseDetail from "./pages/CourseDetail";

const renderRoutes = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/course/:id" exact component={CourseDetail} />
      <MainLayout>
        <SwipeableRoutes replace>
          <Route path="/home" exact component={HomePage} />
          <Route path="/personal" exact component={CoursePage} />
          <Route path="/wishlist" exact component={WishlistPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </SwipeableRoutes>
      </MainLayout>
    </Switch>
  </React.Fragment>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
