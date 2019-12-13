import React from 'react';
import FlagCodeProvider from './FlagCodeContext';
// import TextContextProvider from './TextContext'; // 나중에

export default ContextsProvider = (props) => {
  return (
    // <TextContextProvider>

    <FlagCodeProvider>
      {props.children}
    </FlagCodeProvider>

    // </TextContextProvider>
  )
}