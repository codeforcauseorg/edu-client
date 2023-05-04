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
import SearchSection from "../pages/SearchSection";
import SearchTag from "../pages/SearchTag";
import DoubtDetailSection from "../pages/DoubtDetailSection";
import AboutMentorSection from "../pages/AboutMentorSection";
import AskQuestion from "../pages/AskQuestion/AskQuestion";
import Classroom from "../pages/Classroom";
import CategoriesSection from "../pages/CategoriesSection";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to={ROUTES.HOME} />
    </Route>

    <Route path={ROUTES.COURSE_DETAILS} exact component={CourseDetails} />

    <Route path={ROUTES.LESSONS_PLAYER} exact component={LessonsPlayer} />

    <AuthRoute exact path={ROUTES.CHECKOUT} type="private">
      <MainLayout>
        <Checkout />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.CATEGORIES}>
      <MainLayout>
        <CategoriesSection />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.CLASSROOM} type="private">
      <MainLayout>
        <Classroom />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.ASK_QUESTION} type="private">
      <MainLayout>
        <AskQuestion />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.MENTOR_SECTION}>
      <MainLayout>
        <AboutMentorSection />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.DOUBT_QUESTIONS_DETAILS}>
      <MainLayout>
        <DoubtDetailSection />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.SEARCH_SECTION}>
      <MainLayout>
        <SearchSection />
      </MainLayout>
    </AuthRoute>

    <AuthRoute exact path={ROUTES.SEARCH_TAG}>
      <MainLayout>
        <SearchTag />
      </MainLayout>
    </AuthRoute>

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

    <AuthRoute path={ROUTES.WISHLIST} exact type="private">
      <MainLayout>
        <WishlistPage />
      </MainLayout>
    </AuthRoute>

    <AuthRoute path={ROUTES.DASHBOARD} exact type="private">
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
