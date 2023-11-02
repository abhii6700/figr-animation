import React from 'react';
import TextReveal from '../../components/TextReveal';
import HeroSection from '../../components/HeroSection';
import Parallax from '../../components/Parallax';
import CardScrollUp from '../../components/CardScrollUp';
import VerticalCarousel from '../../components/VerticalCarousel';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CardScrollUp />
      <TextReveal />
      <VerticalCarousel />
      <Parallax />
    </div>
  );
};

export default LandingPage;
