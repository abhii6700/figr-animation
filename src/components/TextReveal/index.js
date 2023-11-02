import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import SplitType from 'split-type';
import { Typography, styled } from '@mui/material';
import { SectionWrapper } from '../StyledComponents/sectionWrapper';

const TextReveal = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll('.reveal-type');
    const container = document.getElementsByClassName('.reveal-type');

    const text = new SplitType(splitTypes, { types: 'chars' });

    gsap.fromTo(
      text.chars,
      {
        color: '#202020',
      },
      {
        color: '#FFFFFF',
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: splitTypes,
          start: 'top 40%',
          end: 'top 10%',
          scrub: 1,
          toggleActions: 'play play reverse reverse',
        },
      }
    );
  }, []);

  return (
    <SectionWrapper className="text-reveal">
      <Typography variant="large" width={'60%'} className="reveal-type">
        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
        efficitur neque.
      </Typography>
    </SectionWrapper>
  );
};

export default TextReveal;
