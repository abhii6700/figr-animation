import React, { useLayoutEffect, useRef } from 'react';
import { SectionWrapper } from '../StyledComponents/sectionWrapper';
import { Stack, Typography, styled } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const VerticalCarousel = () => {
  const cardContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.cards', { position: 'absolute' });
    gsap.set('.card-1', { opacity: 1 });

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: cardContainer.current,
          start: 'top top',
          scrub: true,
          pin: true,
          pinSpacing: false, // Change this to false or adjust as needed
          end: '+=800',
        },
      })
      .to('.card-1', { opacity: 0 })
      .to('.card-2', { opacity: 1 })
      .to('.card-2', { opacity: 0 })
      .to('.card-3', { opacity: 1 });

    ScrollTrigger.update();
  }, []);

  return (
    <SectionWrapper ref={cardContainer} style={{ height: '200vh' }}>
      <Stack width={'40%'} gap={2}>
        <Typography variant="body" color={'primary.main'}>
          Workflow
        </Typography>
        <Typography variant="extraLarge" color={'white.main'}>
          Korem ipsum dolor sit amet
        </Typography>
        <Typography variant="subtitle" color={'white.main'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
          et velit interdum, ac aliquet odio mattis.
        </Typography>
      </Stack>

      <RoundedCardsContainer>
        <RoundedCards className="cards card-1" style={{ background: 'red' }} />
        <RoundedCards className="cards card-2" style={{ background: 'blue' }} />
        <RoundedCards
          className="cards card-3"
          style={{ background: 'green' }}
        />
      </RoundedCardsContainer>
    </SectionWrapper>
  );
};

const RoundedCards = styled('div')(({ theme }) => ({
  width: '100%',
  height: '500px',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.10)',
  opacity: 0,
}));

const RoundedCardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '505px',
  position: 'relative',
  gap: '24px',
}));

export default VerticalCarousel;
