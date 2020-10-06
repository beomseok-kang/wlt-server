import styled from "styled-components";
import Link from "next/link";

const StyledRoomButtonWrapper = styled.li`
  height: 4rem;
  width: 100%;
  background: #bbbbbb;
  border-radius: 1rem;
`;

const StyledTeamImage = styled.img`
  height: 60%;
`;

const StyledSpan = styled.span``;

const StyledRoomButton = styled.a`
  /* settings */
  box-sizing: border-box;
  padding: 0 2rem;
  margin: 0;
  display: flex;
  outline: none;
  border: none;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: none;
  border-radius: 1rem;

  /* width height */
  height: 100%;
  width: 100%;

  /* style */
  color: #ffffff;
  font-size: 1rem;
`;

function RoomButtonPresenter({ children, team, currentNum, maxNum }) {
  return (
    <StyledRoomButtonWrapper>
      <Link href="/room/[team]" as={`/room/${team}`}>
        <StyledRoomButton>
          <StyledTeamImage src={`/${team}.png`} alt={`${team} logo`} />
          {children}
          <StyledSpan>{`${currentNum} / ${maxNum}`}</StyledSpan>
        </StyledRoomButton>
      </Link>
    </StyledRoomButtonWrapper>
  );
}

export default RoomButtonPresenter;
