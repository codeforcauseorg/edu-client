/* eslint-disable react/no-array-index-key */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage";
import Login from './pages/Login/Login';

let renderRoutes = () => (
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
);

function Routes() {
  if(localStorage.getItem('loggedin') == null){ //In place of logged in token will be stored
    renderRoutes = ()=>(
      <Switch>
        <Route path='/login' component={Login}/>
        <Redirect to='/login'/>
      </Switch>
    )
  }
  return renderRoutes({});
}

export default Routes;
