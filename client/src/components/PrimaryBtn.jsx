import { Button } from '@mui/material';
import React from 'react';

export const PrimaryBtn = (props) => {
  return (
    <Button
      sx={{
        backgroundColor: '#671d63',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        span: { display: 'block', fontSize: '16px' },
        color: '#fff',
        borderRadius: '5px',
        padding: '25px',
        fontSize: '12px',
        lineHeight: '16px',
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
