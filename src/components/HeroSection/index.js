import { styled } from '@mui/material';
import React from 'react';

const HeroSection = () => {
  return <HeroSectionWrapper>HeroSection</HeroSectionWrapper>;
};

const HeroSectionWrapper = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export default HeroSection;
