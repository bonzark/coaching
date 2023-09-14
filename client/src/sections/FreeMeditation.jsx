import React from "react";
import {
  Box,
  InputBase,
  Typography,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { validationEmail } from "../utils/validation";

const FreeMeditation = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: validationEmail,
    onSubmit: (values) => {
      console.log(" Free Meditation :", values);
    },
  });

  return (
    <Box
      sx={{
        mx: "auto",
        padding: "6rem 0",
        backgroundColor: "#f9f6f9",
      }}
    >
      <Box
        sx={{
          marginInline: "auto",
          width: "100%",
        }}
      >
        <Typography
          component={"h4"}
          sx={{
            fontSize: { xs: "32px", sm: "48px" },
            color: "#671d63",
            lineHeight: "48px",
            fontFamily: "'Abril FatFace', sans-serif",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Free Meditation
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontSize: "22px",
            textAlign: "center",
            color: "#2b2b2b",
            marginBottom: "10px",
            paddingTop: "20px",
          }}
        >
          Sign up with us to receive free meditation
        </Typography>
        <Box sx={{ mx: "auto" }}>
          <form onSubmit={formik.handleSubmit}>
            <Paper
              sx={{
                backgroundColor: "white",
                borderRadius: "100px",
                borderColor: "transparent",
                mx: "auto",
                paddingLeft: "25px",
                width: { xs: "80%", md: "40%" },
              }}
            >
              <InputBase
                id="email"
                name="email"
                type="email"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required={true}
                error={formik.touched.name && Boolean(formik.errors.name)}
                sx={{
                  paddingY: "20px",
                  paddingX: "5px",
                  backgroundColor: "transparent",
                  borderRadius: "100px",
                  width: "100%",
                }}
                placeholder="Email Address Here"
                endAdornment={
                  <InputAdornment position="end">
                    <PrimaryBtn
                      type="submit"
                      sx={{
                        background: "linear-gradient(#f2d9de, #793473)",
                        color: "white",
                        borderRadius: "50%",
                        padding: "20px",
                        fontSize: "40px",
                      }}
                    >
                      <ArrowForwardIcon />
                    </PrimaryBtn>
                  </InputAdornment>
                }
              />
            </Paper>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeMeditation;
