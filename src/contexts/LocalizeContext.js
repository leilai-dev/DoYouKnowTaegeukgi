import React, { createContext, useState } from "react";

export const LocalizeContext = createContext(null);

// for class component
export const LocalizeConsumer = LocalizeContext.Consumer;

export default LocalizeProvider = (props) => {
  // const [currentLanguage, setCurrentLanguage] = useState('en');
  // 설정 할게 있을라나??
  return (
    <LocalizeContext.Provider
      value={{
        // currentLanguage, setCurrentLanguage
      }}
    >
      {props.children}
    </LocalizeContext.Provider>
  )
}