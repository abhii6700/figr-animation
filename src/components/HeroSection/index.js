import React, { useContext, useLayoutEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Stack, Typography, styled } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { SectionWrapper } from '../StyledComponents/sectionWrapper';
import Frame from '../../assets/images/Frame.webp';
import '../../index.css';
import CustomCursor from '../CustomCursor';
import { MouseContext } from '../../context/mouseContext';

const HeroSection = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.container', {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000,
    });

    let tween = gsap.fromTo('.container', {}, { rotationX: '-70deg' }),
      st = ScrollTrigger.create({
        trigger: '.container',
        start: 'top top',
        end: '+=600',
        scrub: true,
        toggleActions: 'play play reverse reverse',
        animation: tween,
      });
  }, []);

  return (
    <SectionWrapper>
      <CustomCursor />
      <Container
        className="container"
        id="container"
        onMouseEnter={() => {
          cursorChangeHandler('show');
        }}
        onMouseLeave={() => cursorChangeHandler('')}
        style={{ cursor: 'none' }}
      >
        <Stack width={'50%'} gap={2}>
          <CustomButton
            variant="contained"
            width={'fit-content'}
            endIcon={<ArrowForwardIcon className="button-arrow" />}
          >
            <Typography variant="label">
              ✨ $7.5M seed raised with Accel & Square Peg
            </Typography>
          </CustomButton>
          <Typography variant="large" color={'white.main'}>
            Impactful stories. Made effortlessly
          </Typography>
          <Typography variant="subtitle" color={'white.main'}>
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Typography>
        </Stack>
        <img style={{ width: '50%', objectFit: 'cover' }} src={Frame}></img>
      </Container>
    </SectionWrapper>
  );
};

const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '6px 18px',
  borderRadius: '24px',
  width: 'fit-content',
  color: 'white',
  cursor: 'none',

  '.button-arrow': {
    transition: 'all 0.8s ease-out',
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',

    '.button-arrow': {
      marginLeft: '8px',
      transition: 'all 0.8s ease-out',
    },
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
}));

const Container = styled('div')(({ theme }) => ({
  height: '60%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '70%',
  margin: '0 auto',
  background: '#111111',
  borderRadius: '32px',
  padding: '80px',
  gap: '32px',
  //   cursor: 'crosshair'
  cursor: 'url(https://imageupload.io/ib/J89HIPqVqpsQFJr_1698870487.png), auto',
}));

export default HeroSection;
