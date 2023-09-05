import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { FormModal } from "../sections/FormModal";

const Routers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Private Routes */}
        <PrivateRoute path="/dashboard" element={<Dashboard />} />

        {/* 404 Route */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
  );
};

export default Routers;
