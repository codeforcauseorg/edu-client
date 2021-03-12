/* eslint-disable react/no-array-index-key */
import React from "react";
import {  Route, Redirect } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";

const renderRoutes = () => (
<<<<<<< HEAD
  <React.Fragment>
    <MainLayout>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <SwipeableRoutes replace>
          <Route
            path="/home"
            exact
            component={HomePage}
          />
          <Route
            path="/personal"
            exact
            component={CoursePage}
          />
          <Route
            path="/wishlist"
            exact
            component={WishlistPage}
          />
          <Route
            path="/profile"
            exact
            component={ProfilePage}
          />
        
      </SwipeableRoutes>
    </MainLayout>
    
  </React.Fragment>
=======
  <Switch>
    <Route path="/" exact>
      <Redirect to="/home" />
    </Route>
    <Route
      path="/home"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/personal"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <CoursePage />
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/wishlist"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <WishlistPage />
          </MainLayout>
        </>
      )}
    />
    <Route
      path="/profile"
      exact
      render={(props) => (
        <>
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        </>
      )}
    />
  </Switch>
>>>>>>> 73e315749cd4c01d6402edc9d6ace824c9ca9c87
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
