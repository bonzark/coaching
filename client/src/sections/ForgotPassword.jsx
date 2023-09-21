import { InputBox } from "../components/InputBox";
import { MainModal } from "../components/MainModal";
import { useSnackbar } from "notistack";
import { PrimaryBtn } from "../components/PrimaryBtn";
import { validationForgotSchema } from "../utils/validation";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { requestReset } from "../services/auth.service";

const ForgotPassword = ({ isOpen, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: validationForgotSchema,
    onSubmit: (values) => {
      requestReset({ email: values.email })
        .then((res) => {
          if (res?.status === 200) {
            enqueueSnackbar(res?.data, { variant: "success" });
            handleClose(formik.resetForm());
          } else if (res?.response?.data?.error) {
            enqueueSnackbar(res?.response?.data?.error, {
              variant: "error",
            });
          } else if (res.response.status === 401) {
            enqueueSnackbar(res?.response?.data?.message, {
              variant: "error",
            });
          }
        })
        .catch((error) => {
          setIsLogin(false);
          enqueueSnackbar(error?.response?.data?.error, {
            variant: "error",
          });
        });
    },
  });

  return (
    <MainModal open={isOpen} handleClose={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#671d63",
            fontSize: "1.5rem",
            fontWeight: 900,
            marginBottom: "1rem",
          }}
        >
          Forgot Password
        </Typography>
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
        <PrimaryBtn type="submit" fullWidth>
          Send
        </PrimaryBtn>
      </form>
    </MainModal>
  );
};

export default ForgotPassword;
