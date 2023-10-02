import React from 'react';
import OurCoachesCard from '../../components/OurCoachesCard';
import PageBanner from '../../sections/PageBanner';

const AllCoaches = () => {
  return (
    <>
      <PageBanner heading="Know more about our coaches" imgSrc="./coach.jpg" />
      <OurCoachesCard />
    </>
  );
};

export default AllCoaches;
