/* eslint-disable react/no-array-index-key */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DocsLayout from "./layouts/DocsLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";
import Privacy from "./pages/documents/Privacy";
import Terms from "./pages/documents/Terms";

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
    <Route
      path="/privacy"
      exact
      render={(props) => (
        <>
          <DocsLayout>
            <Privacy />
          </DocsLayout>
        </>
      )}
    />
    <Route
      path="/terms-and-conditions"
      exact
      render={(props) => (
        <>
          <DocsLayout>
            <Terms />
          </DocsLayout>
        </>
      )}
    />
  </Switch>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
