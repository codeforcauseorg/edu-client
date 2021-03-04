/* eslint-disable react/no-array-index-key */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage";
import WishlistPage from "./pages/WishlistPage";
import ProfilePage from "./pages/ProfilePage";

const renderRoutes = () => (
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
            <PersonalPage/>
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
            <WishlistPage/>
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
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
