import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import { InputBox } from "../components/InputBox";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { validationContact } from "../utils/validation";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      contact: "",
      email: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: validationContact,
    onSubmit: (values) => {
      console.log("Contact submited.", values);
    },
  });

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        boxShadow: "0 0 15px 0px #00000020",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#fff",
        mx: "auto",
        maxWidth: "600px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography
          varient="h1"
          sx={{
            fontFamily: "'Abril Fatface',cursive",
            color: "#671d63",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: 500,
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Contact Us
        </Typography>
        <Box>
          <InputBox
            label="Name"
            fullWidth
            name="fullname"
            id="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            helperText={formik.touched.fullname && formik.errors.fullname}
          />
        </Box>
        <Box>
          <InputBox
            label="Contact No"
            fullWidth
            name="contact"
            id="contact"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
          />
        </Box>
        <Box>
          <InputBox
            label="Email"
            fullWidth
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Box>
        <Box>
          <InputBox
            label="Message"
            fullWidth
            multiline
            rows={6}
            name="message"
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Box>
        <Box>
          <PrimaryBtn type="submit" fullWidth>
            Send
          </PrimaryBtn>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
