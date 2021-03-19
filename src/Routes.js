/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";
import CourseDetail from "./pages/CourseDetail";

const renderRoutes = () => (
  <React.Fragment>
    <MainLayout>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/course/:id" exact component={CourseDetail} />
      <SwipeableRoutes replace>
        <Route path="/home" exact component={HomePage} />
        <Route path="/personal" exact component={CoursePage} />
        <Route path="/wishlist" exact component={WishlistPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </SwipeableRoutes>
    </MainLayout>
  </React.Fragment>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
