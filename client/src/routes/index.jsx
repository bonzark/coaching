import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/home";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import OnlineCourses from "../pages/onlineCourses/onlineCourses";
import BecomeYourCreator from "../pages/becomeYourCreater/becomeYourCreater";
import WealthCreationSection from "../pages/../sections/WealthCreation";
import CoachDetail from "../pages/coachDetail/coachDetail";
import Contact from "../pages/contact/contact";
import Event from "../pages/event/event";
import AllCoaches from "../pages/ourCoaches/ourCoaches";
import OurCoachesDetail from "../pages/ourCoaches/ourCoachesDetail";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/our-coaches" element={<AllCoaches />} />
        <Route exact path="/online-courses" element={<OnlineCourses />} />
        <Route exact path="/coaching-with-rita" element={<CoachDetail />} />
        <Route
          exact
          path="/become-your-creator"
          element={<BecomeYourCreator />}
        />
        <Route
          exact
          path="/wealth-creation"
          element={<WealthCreationSection />}
        />
        <Route exact path="/events" element={<Event />} />
        <Route exact path="/contact" element={<Contact />} />
                <Route element={<PrivateRoute />}>
          <Route path="/ourCoachesDetail/:id" element={<OurCoachesDetail />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
