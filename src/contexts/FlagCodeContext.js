import React, { createContext, useState } from "react";

export const FlagCodeContext = createContext(null);

export default FlagCodeProvider = (props) => {
  const [countryCode, setCountryCode] = useState('KR')
  return (
    <FlagCodeContext.Provider
      value={{
        countryCode,
        setCountryCode
      }}
    >
      {props.children}
    </FlagCodeContext.Provider>
  )
}

// 사용할 때는 index.js에서 전체 Provider 감싸기,
// useContext or 클래스형에서는 뭐더라
// 