import { Stack, Typography, styled } from '@mui/material';
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const Parallax = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const cardBounds = card.getBoundingClientRect();
    const cardCenterX = cardBounds.left + cardBounds.width / 2;
    const cardCenterY = cardBounds.top + cardBounds.height / 2;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const xOffset = (cursorX - cardCenterX) / 10;
    const yOffset = (cursorY - cardCenterY) / 10;

    // Limit the maximum rotation to 2 degrees
    const maxXRotation = Math.min(10, Math.max(-10, xOffset));
    const maxYRotation = Math.min(2, Math.max(-2, yOffset));

    gsap.to(card, {
      rotationX: -maxYRotation, // Tilt on X-axis
      rotationY: maxXRotation, // Tilt on Y-axis
      duration: 0.3,
      transformOrigin: 'center center',
      transition: 'all 0.2s linear 0s',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationX: 0, // Reset tilt on X-axis
      rotationY: 0, // Reset tilt on Y-axis
      duration: 0.3,
      transformOrigin: 'center center',
      transition: 'all 0.2s linear 0s',
    });
  };

  return (
    <ParallaxSectionWrapper>
      <Stack width={'35%'} gap={2}>
        <Typography variant="body" color={'primary.main'}>
          Mobile experience
        </Typography>
        <Typography variant="extraLarge" color={'white.main'}>
          Korem ipsum dolor sit amet
        </Typography>
        <Typography variant="subtitle" color={'white.main'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
          et velit interdum, ac aliquet odio mattis.
        </Typography>
      </Stack>
      <CardContainer
        className="card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card
          style={{
            transform: 'rotate(-18deg) translateX(80px) translateY(60px)',
          }}
        />
        <Card style={{ zIndex: 999 }} />
        <Card
          style={{
            transform: 'rotate(18deg) translateX(-80px) translateY(60px)',
          }}
        />
      </CardContainer>
    </ParallaxSectionWrapper>
  );
};

const ParallaxSectionWrapper = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const Card = styled('div')(({ theme }) => ({
  width: '275px',
  height: '569px',
  flexShrink: 0,
  borderRadius: '59px',
  border: '12px solid #1A1A1A',
  //   background: '#000',
  background:
    'url(https://imgs.search.brave.com/MilN6M8fjwosDbxwx4Ij6ySBnC5adCpthTOTY8-_34A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzA3MTQ1ODk3MDgt/ZDBiN2M4NGI1Mjc2/P2F1dG89Zm9ybWF0/JmZpdD1jcm9wJnE9/ODAmdz0xMDAwJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bGVI/QnNiM0psTFdabFpX/UjhNVEo4Zkh4bGJu/d3dmSHg4Zkh3PQ)',
  backgroundPosition: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

export default Parallax;
