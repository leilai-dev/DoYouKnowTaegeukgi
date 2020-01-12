import React from 'react';
import FlagCodeProvider from './FlagCodeContext';
import TextContextProvider from './TextContext';
import LocalizeProvider from './LocalizeContext';

export default ContextsProvider = (props) => {
  return (
    <LocalizeProvider>
      <TextContextProvider>
        <FlagCodeProvider>
          {props.children}
        </FlagCodeProvider>
      </TextContextProvider>
    </LocalizeProvider>
  )
}