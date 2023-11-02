import React, { useContext } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { MouseContext } from '../../context/mouseContext';
import './style.css';
import { Typography, styled } from '@mui/material';
import Arrow from '../../assets/images/arrow.svg';

const CustomCursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <div
      className={'customCursor ' + cursorType}
      style={{
        left: `${x + 20}px`,
        top: `${y}px`,
      }}
    >
      <img src={Arrow}></img>
      <CursorUserName>
        <Typography variant="label" color={'white.main'}>
          You
        </Typography>
      </CursorUserName>
    </div>
  );
};

const CursorUserName = styled('div')(({ theme }) => ({
  borderRadius: '0px 5px 5px 5px',
  background: '#4093FF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 8px',
  width: 'fit-content',
  marginTop: '42px',
  marginLeft: '-8px',
}));

export default CustomCursor;
