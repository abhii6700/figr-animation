import React from 'react';
import { SectionWrapper } from '../StyledComponents/sectionWrapper';
import { Stack, Typography } from '@mui/material';

const VerticalCarousel = () => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
};

export default VerticalCarousel;
