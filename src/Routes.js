/* eslint-disable react/no-array-index-key */
import { Route, Redirect, Switch } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomeView";
import CoursePage from "./pages/CoursePageViewWithVideo/IndividualCourse";
import MyCourses from "./pages/CoursePageViewWithVideo/index";
import WishlistPage from "./pages/wishListView";
import ProfilePage from "./pages/ProfilePage/index";
import CourseDetail from "./pages/CourseDetail";
import { Container } from "@material-ui/core";

const renderRoutes = () => (
  <Container maxWidth="xs" style={{ margin: "auto", padding: 0 }}>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/course/:id" exact component={CourseDetail} />
      <MainLayout>
        <SwipeableRoutes replace>
          <Route path="/home" exact component={HomePage} />
          <Route path="/mycourses" exact component={MyCourses} />
          <Route path="/mycourses/each" exact component={CoursePage} />
          <Route path="/wishlist" exact component={WishlistPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </SwipeableRoutes>
      </MainLayout>
    </Switch>
  </Container>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
