import React, { Suspense } from "react";
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
import EditProfile from "../pages/ProfilePage/ProfileComponent/EditProfile";
import Resources from "../pages/Resources";
import HackathonsAndEvents from "../pages/HackAndEventsPage";
import LandingPage from "../pages/LandingPage/index";
import AuthRoute from "../components/auth/AuthRoute/index";
import PageNotFound from "../pages/PageNotFound";
import * as ROUTES from "../constants/ConstRoutes";
import LoadingScreen from "../pages/LoadingScreen";

const Routes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route path="/" exact>
        <Redirect to={ROUTES.HOME} />
      </Route>
      <Route path="/terms-and-conditions" exact component={Terms} />
      <Route path={ROUTES.COURSE_DETAILS} exact component={CourseDetails} />
      <Route path="/checkout/:id" exact component={Checkout} />
      <Route path="/privacy" exact component={Privacy} />
      <Route path="/about" exact component={About} />
      <Route path="/faq" exact component={Faqs} />
      <Route path="/ratementor/:coursename" exact component={MentorRating} />
      <Route path="/terms-and-conditions" exact component={Terms} />
      <Route path="/resources/:coursename" exact component={Resources} />
      <Route path="/contactUs" exact component={ContactUs} />
      <Route path="/dashboard" exact component={StudentDashboard} />
      <Route path="/contests" exact component={Contests} />
      <Route path="/dashboard/assignment/:id" exact component={AssignmentSubmission} />
      <Route path="/job-openings" exact component={JobOpenings} />
      <Route path="/statistics" exact component={Statistics} />
      <Route path="/peer" exact component={PeerPage} />
      <Route path="/peer/:id/comments" exact component={Comment} />
      <Route path="/faq" exact component={Faqs} />
      <Route path="/about" exact component={About} />
      <Route path="/mentorPage" exact component={MentorPage} />
      <Route path="/referralAndCoupons" exact component={ReferralAndCoupons} />
      <Route path="/editprofile" exact component={EditProfile} />
      <Route path="/hackathonsAndEvents" exact component={HackathonsAndEvents} />

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
  </Suspense>
);

export default Routes;
