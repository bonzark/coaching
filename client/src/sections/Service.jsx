import { Grid, Typography } from '@mui/material'
import React from 'react'

const ServiceSection = () => {
  return (
    <div>
      <Grid container>
        <Grid container xs={6}>
          <Typography item>
            Here is chance to win...
          </Typography>
        </Grid>
        <Grid container xs={6}>
          <img src="./service.JPG" alt="" />
        </Grid>
      </Grid>
    </div>
  )
}

export default ServiceSection