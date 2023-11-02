import React, { createContext, useState } from 'react';

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState('hide');

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
