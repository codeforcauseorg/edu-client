import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/MainLayoutPage/HomeView/index";
import GamificationBoard from "../pages/MainLayoutPage/GamificationBoard/index";
import WishlistPage from "../pages/MainLayoutPage/WishListView/index";
import Dashboard from "../pages/MainLayoutPage/Dashboard/index";
import CourseDetails from "../pages/CourseDetailSection";
import LandingPage from "../pages/LandingPage/index";
import AuthRoute from "../components/auth/AuthRoute/index";
import PageNotFound from "../pages/PageNotFound";
import * as ROUTES from "../constants/routes";
import LessonsPlayer from "../pages/LessonsPlayer/index";
import DoubtForum from "../pages/MainLayoutPage/DoubtForum";
import Checkout from "../pages/Checkout";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to={ROUTES.HOME} />
    </Route>
    <Route path={ROUTES.COURSE_DETAILS} exact component={CourseDetails} />
    <Route path={ROUTES.LESSONS_PLAYER} exact component={LessonsPlayer} />
    <Route path={ROUTES.CHECKOUT} exact component={Checkout} />
    <AuthRoute path={ROUTES.SIGNUP} exact type="guest">
      <LandingPage />
    </AuthRoute>
    <AuthRoute exact path={ROUTES.HOME}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.GAMIFICATION_BOARD} exact>
      <MainLayout>
        <GamificationBoard />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.WISHLIST} exact>
      <MainLayout>
        <WishlistPage />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.DASHBOARD} exact>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.DOUBTFOURM} exact>
      <MainLayout>
        <DoubtForum />
      </MainLayout>
    </AuthRoute>
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
