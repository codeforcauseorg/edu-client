/* eslint-disable react/no-array-index-key */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage/index";
import CourseDetail from "./pages/CourseDetail";
import DocsLayout from "./layouts/DocsLayout";
import Privacy from "./pages/Info/Privacy";
import Terms from "./pages/Info/Terms";
import Faqs from "./pages/Info/Faqs";
import About from "./pages/Info/About";

const renderRoutes = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <DocsLayout>
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/about" exact component={About} />
        <Route path="/faqs" exact component={Faqs} />
        <Route path="/terms-and-conditions" exact component={Terms} />
      </DocsLayout>
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
