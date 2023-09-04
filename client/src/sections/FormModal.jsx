import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { MainModal } from "../components/MainModal";
import { useFormik } from "formik";
import * as yup from "yup";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { InputBox } from "../components/InputBox";
import { useSnackbar } from "notistack";
import axios from "axios";

const validationSchema = yup.object({
  name: yup.string("Enter your email").required("Email is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .matches(/\d/, "Password must contain at least one digit")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export const FormModal = ({ open, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loggedIn, setLoggedIn] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:4000/auth/register", values)
        .then(function (response) {
          console.log(response);
          enqueueSnackbar(response.data, { variant: "success" });
          handleClose();
        })
        .catch(function (error) {
          enqueueSnackbar(error?.response?.data?.errors[0]?.msg, {
            variant: "error",
          });
        });
    },
  });

  return (
    <MainModal open={open} handleClose={handleClose}>
      <Typography
        component={"h4"}
        sx={{
          fontSize: "26px",
          fontWeight: "600",
          textAlign: "center",
          color: "#671d63",
          marginBottom: "10px",
        }}
      >
        {loggedIn ? "Log In" : "Register"}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          textAlign: "center",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Enter Your Details Below To Access The Guide
      </Typography>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          {!loggedIn && (
            <InputBox
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          )}
          <InputBox
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputBox
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <PrimaryBtn fullWidth type="submit">
            {loggedIn ? "Log In" : "Register"}
          </PrimaryBtn>

          <Typography sx={{ textAlign: "center", mt: "20px" }}>
            {loggedIn ? "Don't have account? " : "Already Registered? "}
            <span
              style={{ cursor: "pointer", color: "#671d63" }}
              onClick={() => setLoggedIn(!loggedIn)}
            >
              {loggedIn ? "Register." : "Log In."}
            </span>
          </Typography>
        </form>
      </Box>
    </MainModal>
  );
};
