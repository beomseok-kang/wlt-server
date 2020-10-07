import styled from "styled-components";
import { addRem } from "../../../lib/funcLib";
import { headerHeight } from "./RoomHeaderPresenter";
import { chatterHeight } from "./ChatterPresenter";

const heightToRemove = addRem([headerHeight, chatterHeight]) + "rem";

const StyledDiv = styled.div`
  height: calc(100% - ${heightToRemove});
  width: 100%;
  position: relative;
`;

function ChatWrapperPresenter({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ChatWrapperPresenter;
