import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SuccessStories from '../components/SuccessStoriesCard';
import { Box, Typography } from '@mui/material';

const items = [
  {
    imgSrc: './successStories.jpg',
    title: 'TESTIMONIAL FROM N.O. 1',
    content:
      'I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀',
  },
  {
    imgSrc: './successStories.jpg',
    title: 'TESTIMONIAL FROM N.O. 2',
    content:
      'I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀',
  },
  {
    imgSrc: './successStories.jpg',
    title: 'TESTIMONIAL FROM N.O. 3',
    content:
      'I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀',
  },
  {
    imgSrc: './successStories.jpg',
    title: 'TESTIMONIAL FROM N.O. 4',
    content:
      'I was referred to Rita by a very close friend of mine, and so happy she did. I had a lovely reading. She was very intuitive and experienced a lot that I was very confused about. I highly recommend this reading to anyone working on their spiritual journey and if you are questioning your twin flame relationship. Thank you so much Rita! 😀',
  },
];

const SuccessCarousel = () => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(#EFE6EF, #F1E2F0)',
          py: '100px',
        }}
      >
        <Typography
          className="borderTitle"
          variant="span"
          sx={{
            position: 'relative',
            fontSize: { xs: '32px', sm: '48px' },
            color: '#671d63',
            lineHeight: '50px',
            fontFamily: "'montserrat', sans-serif",
            display: 'flex',
            marginBottom: { xs: '30px', md: '50px' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            marginLeft: { xs: '0px', md: '230px' },
            '::before': {
              position: 'absolute',
              bottom: { xs: '-12px', md: '-25px' },
              color: 'black',
              content: `""`,
              height: '3px',
              width: '10vw',
              backgroundColor: '#000',
            },
          }}
        >
          Success Stories
        </Typography>
        <Carousel duration={10}>
          {items.map((item, index) => (
            <SuccessStories
              key={index}
              imgSrc={item.imgSrc}
              content={item.content}
              title={item.title}
            />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default SuccessCarousel;
