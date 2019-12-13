import React, { createContext, useState } from "react";

// 현재 App.js에 선언되어 있는 내용을 여기로 바꾸기 > 결국 같은 기능?

// useContext를 사용하는 컴포넌트?
// TextDisplayArea, RBContainer (UI)
export const TextContext = createContext(null);

export default FlagCodeProvider = (props) => {
  const [isTextDisplay, setTextDisplay] = useState(true);
  const [isTextLoop, setTextLoop] = useState(false);
  const [text, setText] = useState('화면을 터치하여 글 수정');

  const [loopSpeed, setLoopSpeed] = useState(10); // 2~40
  const [textPosition, setTextPosition] = useState('center'); // 'center', 'flex-end', 'flex-start', 'expand'
  const [fontSize, setFontSize] = useState(0.2); // 0.2 ~ 1 (5)
  const [fontColor, setFontColor] = useState(''); // UI 미구현
  return (
    <TextContext.Provider
      value={{
        isTextDisplay, setTextDisplay,
        isTextLoop, setTextLoop,
        text, setText,
        loopSpeed, setLoopSpeed,
        textPosition, setTextPosition,
        fontSize, setFontSize,
        fontColor, setFontColor,
      }}
    >
      {props.children}
    </TextContext.Provider>
  )
}