import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React, { useState } from 'react';
import { PrimaryBtn } from '../components/PrimaryBtn';
import FormModal from './FormModal';
import { getAuthToken } from '../utils/auth';

const HeroBanner = ({ title, imageUrl, header, listItems, buttonText, description }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (resetForm) => {
    setOpen(false);
    resetForm();
  };

  return (
    <>
      <FormModal open={open} handleClose={handleClose} />
      <Box
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: { xs: '100%', md: '85%' },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { xs: 'center top', md: '140% center' },
          position: 'relative',
          '::after': {
            content: "' '",
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: {
              xs: 'linear-gradient(0, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66%)',
              md: 'linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 40%)',
            },
            zIndex: 0,
            top: 0,
            left: 0,
          },
        }}
      >
        <Container
          sx={{
            minHeight: { xs: '100vh' },
            display: 'flex',
            alignItems: { xs: 'end', md: 'center' },
            position: 'relative',
            zIndex: 1,
          }}
          maxWidth="false"
        >
          <Box
            sx={{
              width: { xs: 'auto  ', md: '40%', lg: '35%' },
              padding: {
                xs: '0 0 50px 0',
                md: '100px 50px',
                lg: '200px 75px',
                xl: '300px 100px',
              },
            }}
          >
            {title && (
              <Typography
                component={'h4'}
                sx={{
                  fontSize: { xs: '15px', md: '22px' },
                  fontWeight: 'normal',
                  fontFamily: "'montserrat', cursive",
                }}
              >
                {title}
              </Typography>
            )}
            {header && (
              <Typography
                component={'p'}
                sx={{
                  fontSize: { xs: '22px', md: '30px', lg: '42px' },
                  color: '#671d63',
                  fontWeight: 'normal',
                  lineHeight: { xs: '27px', md: '36px', lg: '62px' },
                  textTransform: 'capitalize',
                  fontFamily: "'montserrat', cursive",
                }}
              >
                {header}
              </Typography>
            )}
            {description && (
              <Typography variant="h6" sx={{ my: '1rem', textAlign: 'justify' }}>
                {description}
              </Typography>
            )}
            {listItems && (
              <List>
                {listItems?.map((item) => {
                  return (
                    <ListItem sx={{ padding: '0' }} key={item.key}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <CheckCircleIcon sx={{ color: '#671d63' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ fontWeight: '600' }} primary={item?.name} />
                    </ListItem>
                  );
                })}
              </List>
            )}
            {getAuthToken() === null ? (
              <PrimaryBtn onClick={handleOpen}>
                {' '}
                <>
                  <span>Book your free reading now</span>
                  Gain Awareness Of Your Creation in less than 30 days
                </>
              </PrimaryBtn>
            ) : (
              buttonText && <PrimaryBtn>{buttonText}</PrimaryBtn>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroBanner;
