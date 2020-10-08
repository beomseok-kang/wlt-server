import Link from "next/link";
import styled from "styled-components";
import { StyledWrapperDiv } from "../Lobby/RoomListPresenter";

const StyledA = styled.a`
  /* settings */
  box-sizing: border-box;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;

  /* width height */
  height: 4rem;
  width: 10rem;

  /* style */
  background: #ced4da;
  color: #343a40;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 2px rgba(150, 150, 150, 1);
  transition: 0.2s;
  &:hover {
    background: #f1f3f5;
  }
`;

function WrapperPresenter() {
  return (
    <StyledWrapperDiv>
      <h1>페이지가 존재하지 않습니다</h1>
      <Link href="/lobby">
        <StyledA>로비로</StyledA>
      </Link>
    </StyledWrapperDiv>
  );
}

export default WrapperPresenter;
