import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledText = styled.div`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 700;
  line-height: 1;
  position: absolute;
`;

function ChatTextPresenter({ chat, left, top }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);
    return () => clearTimeout(timer);
  });

  return show ? <StyledText style={{ left, top }}>{chat}</StyledText> : null;
}

export default ChatTextPresenter;
