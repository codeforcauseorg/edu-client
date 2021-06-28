import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/MainLayoutPage/HomeView/index";
import MyCourses from "../pages/MainLayoutPage/MyCourseSection/index";
import WishlistPage from "../pages/MainLayoutPage/WishListView/index";
import ProfilePage from "../pages/ProfilePage/index";
import CourseDetails from "../pages/CourseDetailSection";
import Privacy from "../pages/Info/Privacy";
import Terms from "../pages/Info/Terms";
import Faqs from "../pages/Info/Faqs";
import About from "../pages/Info/About";
import Checkout from "../pages/CheckoutView";
import MentorRating from "../pages/MentorRating";
import PeerPage from "../pages/PeerDiscussionPage/peer";
import Comment from "../pages/PeerDiscussionPage/comments";
import StudentDashboard from "../pages/StudentDashboardPage";
import AssignmentSubmission from "../pages/StudentDashboardPage/AssignmentSubmission/AssignmentSubmission";
import JobOpenings from "../pages/JobOpeningPage";
import Contests from "../pages/Contests";
import Statistics from "../pages/Statistics";
import ContactUs from "../pages/ContactUs";
import MentorPage from "../pages/MentorPage";
import ReferralAndCoupons from "../pages/ReferralAndCouponCodes";
import Resources from "../pages/Resources";
import HackathonsAndEvents from "../pages/HackAndEventsPage";
import LandingPage from "../pages/LandingPage/index";
import AuthRoute from "../components/auth/AuthRoute/index";
import PageNotFound from "../pages/PageNotFound";
import * as ROUTES from "../constants/routes";
import LessonsPlayer from "../pages/LessonsPlayer/index";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to={ROUTES.HOME} />
    </Route>
    <Route path={ROUTES.TERMS_AND_CONDITION} exact component={Terms} />
    <Route path={ROUTES.COURSE_DETAILS} exact component={CourseDetails} />
    <Route path={ROUTES.CHECKOUT} exact component={Checkout} />
    <Route path={ROUTES.PRIVACY} exact component={Privacy} />
    <Route path={ROUTES.ABOUT} exact component={About} />
    <Route path={ROUTES.FAQ} exact component={Faqs} />
    <Route path={ROUTES.MENTOR_RATING} exact component={MentorRating} />
    <Route path={ROUTES.COURSE_RESOURSE} exact component={Resources} />
    <Route path={ROUTES.CONTACTUS} exact component={ContactUs} />
    <Route path={ROUTES.DASHBOARD} exact component={StudentDashboard} />
    <Route path={ROUTES.CONTEST} exact component={Contests} />
    <Route path={ROUTES.DASHBOARD_ASSIGNMENT} exact component={AssignmentSubmission} />
    <Route path={ROUTES.JOB_OPENING} exact component={JobOpenings} />
    <Route path={ROUTES.STATISTICS} exact component={Statistics} />
    <Route path={ROUTES.PEER} exact component={PeerPage} />
    <Route path={ROUTES.COMMENT} exact component={Comment} />
    <Route path={ROUTES.MENTOR_PAGE} exact component={MentorPage} />
    <Route path={ROUTES.REFERRAL} exact component={ReferralAndCoupons} />
    <Route path={ROUTES.HACKATHON_AND_ENENTS} exact component={HackathonsAndEvents} />
    <Route path={ROUTES.LESSONS_PLAYER} exact component={LessonsPlayer} />
    <AuthRoute path={ROUTES.SIGNUP} exact type="guest">
      <LandingPage />
    </AuthRoute>
    <AuthRoute exact path={ROUTES.HOME} type="private">
      <MainLayout>
        <HomePage />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.MYCOURSE} exact type="private">
      <MainLayout>
        <MyCourses />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.WISHLIST} exact type="private">
      <MainLayout>
        <WishlistPage />
      </MainLayout>
    </AuthRoute>
    <AuthRoute path={ROUTES.PROFILE} exact type="private">
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    </AuthRoute>
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
