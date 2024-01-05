import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingText = ({ text,spped }) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: spped,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [text]);

  return <span ref={el} />;
};

export default TypingText;