import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useFormik } from 'formik';
import { Box, Typography } from '@mui/material';
import { MainModal } from '../components/MainModal';
import { PrimaryBtn } from '../components/PrimaryBtn';
import { InputBox } from '../components/InputBox';
import { login, register } from '../services/auth.service';
import { setToken, setUserDetails } from '../utils/auth';
import { validationLoginSchema, validationRegisterSchema } from '../utils/validation';

const FormModal = ({ open, handleClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [logingForm, setLogingForm] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: !logingForm ? validationRegisterSchema : validationLoginSchema,
    onSubmit: (values) => {
      if (logingForm) {
        const data = {
          email: values.email,
          password: values.password,
        };
        login(data)
          .then((res) => {
            enqueueSnackbar(res?.data?.message, { variant: 'success' });
            setToken(res?.data?.token);
            setUserDetails(res?.data?.user);
            handleClose();
          })
          .catch((error) => {
            enqueueSnackbar(error?.response?.data?.errors[0]?.msg, {
              variant: 'error',
            });
          });
      } else {
        register(values)
          .then((res) => {
            enqueueSnackbar(res?.data?.message, { variant: 'success' });
            handleClose();
          })
          .catch((error) => {
            enqueueSnackbar(error?.response?.data?.errors[0]?.msg, {
              variant: 'error',
            });
          });
      }
    },
  });

  return (
    <MainModal open={open} handleClose={handleClose}>
      <Typography
        component={'h4'}
        sx={{
          fontSize: '26px',
          fontWeight: '600',
          textAlign: 'center',
          color: '#671d63',
          marginBottom: '10px',
        }}
      >
        {logingForm ? 'Log In' : 'Register'}
      </Typography>
      <Typography
        component={'p'}
        sx={{
          fontSize: '16px',
          fontWeight: '400',
          textAlign: 'center',
          color: '#000',
          marginBottom: '10px',
        }}
      >
        Enter Your Details Below To Access The Guide
      </Typography>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          {!logingForm && (
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
            {logingForm ? 'Log In' : 'Register'}
          </PrimaryBtn>

          <Typography sx={{ textAlign: 'center', mt: '20px' }}>
            {logingForm ? "Don't have account? " : 'Already Registered? '}
            <span
              style={{ cursor: 'pointer', color: '#671d63' }}
              onClick={() => setLogingForm(!logingForm)}
            >
              {logingForm ? 'Register.' : 'Log In.'}
            </span>
          </Typography>
        </form>
      </Box>
    </MainModal>
  );
};

export default FormModal;
