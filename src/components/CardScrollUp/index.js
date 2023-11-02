import { Stack, Typography, styled } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import React, { useLayoutEffect } from 'react';

const CardScrollUp = () => {
  useLayoutEffect(() => {
    gsap.fromTo(
      '.scroll-up',
      {},
      {
        transform: 'translateY(40px)',
        scrollTrigger: {
          trigger: '.scroll-up',
          start: 'top 50%',
          end: 'top top',
          scrub: 1,
          toggleActions: 'play play reverse reverse',
        },
      }
    );

    gsap.fromTo(
      '.scroll-down',
      {},
      {
        transform: 'translateY(-40px)',
        scrollTrigger: {
          trigger: '.scroll-down',
          start: 'top 50%',
          end: 'top top',
          scrub: 1,
          toggleActions: 'play play reverse reverse',
        },
      }
    );
  }, []);

  return (
    <>
      <TextSectionWrapper>
        <Stack width={'60%'} gap={2}>
          <Typography variant="body" color={'primary.main'}>
            Introducing Blocks
          </Typography>
          <Typography variant="extraLarge" color={'white.main'}>
            A new, easy way to create.
          </Typography>
        </Stack>
      </TextSectionWrapper>
      <CardScrollUpWrapper>
        <Stack direction={'row'} justifyContent={'space-between'} gap={'24px'}>
          <RoundedCardsContainer className="scroll-up">
            <RoundedCards style={{ height: '230px' }} />
            <RoundedCards style={{ height: '397px' }} />
          </RoundedCardsContainer>
          <RoundedCardsContainer
            className="scroll-down"
            style={{ marginTop: '200px' }}
          >
            <RoundedCards style={{ height: '397px' }} />
            <RoundedCards style={{ height: '67px' }} />
          </RoundedCardsContainer>
          <RoundedCardsContainer
            className="scroll-up"
            style={{ marginTop: '400px' }}
          >
            <RoundedCards style={{ height: '250px' }} />
          </RoundedCardsContainer>
          <RoundedCardsContainer
            className="scroll-down"
            style={{ marginTop: '96px' }}
          >
            <RoundedCards style={{ height: '67px' }} />
            <RoundedCards style={{ height: '250px' }} />
          </RoundedCardsContainer>
          <RoundedCardsContainer
            className="scroll-up"
            style={{ marginTop: '193px' }}
          >
            <RoundedCards style={{ height: '397px' }} />
          </RoundedCardsContainer>
          <RoundedCardsContainer className="scroll-down">
            <RoundedCards style={{ height: '397px' }} />
          </RoundedCardsContainer>
        </Stack>
      </CardScrollUpWrapper>
    </>
  );
};

const RoundedCards = styled('div')(({ theme }) => ({
  width: '100%',
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.10)',
}));

const RoundedCardsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '287px',
  gap: '24px',
}));

const CardScrollUpWrapper = styled('div')(({ theme }) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowX: 'hidden',
  padding: 0,
}));

const TextSectionWrapper = styled('div')(({ theme }) => ({
  padding: '0 180px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '48px',
}));

export default CardScrollUp;
