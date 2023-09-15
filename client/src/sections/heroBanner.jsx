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

const HeroBanner = ({ title, imageUrl, header, listItems }) => {
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
          backgroundImage: "url('./heroBg.jpg')",
          backgroundSize: { xs: '100%', md: '82%' },
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
            minHeight: { xs: '100vh', md: '100%' },
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
                md: '100px 0',
                lg: '200px 0',
                xl: '300px 0',
              },
            }}
          >
            <Typography
              component={'h4'}
              sx={{
                fontSize: { xs: '15px', md: '22px' },
                fontWeight: 'normal',
                fontFamily: "'Abril Fatface', cursive",
              }}
            >
              {title}
            </Typography>
            <Typography
              component={'p'}
              sx={{
                fontSize: { xs: '22px', md: '30px', lg: '42px' },
                color: '#671d63',
                fontWeight: 'normal',
                lineHeight: { xs: '27px', md: '36px', lg: '62px' },
                textTransform: 'capitalize',
                fontFamily: "'Abril Fatface', cursive",
              }}
            >
              {header}
            </Typography>
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
            <PrimaryBtn onClick={handleOpen}>
              <span>DOWNLOAD NOW FOR FREE</span>
              Gain Awareness Of Your Creation in less than 30 days
            </PrimaryBtn>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroBanner;
