import styled from "styled-components";

const StyledRoomButtonWrapper = styled.li`
  height: 4rem;
  width: 100%;
  background: #ced4da;
  color: #343a40;
  border-radius: 0.5rem;
  box-shadow: 0 4px 2px rgba(150, 150, 150, 1);
  transition: 0.2s;
  &:hover {
    background: #f1f3f5;
  }
`;

const StyledTeamImage = styled.img`
  height: 60%;
`;

const StyledRoomButton = styled.button`
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
  font-size: 1rem;
  font-weight: bold;
`;

const StyledSpan = styled.span`
  font-weight: normal;
  strong {
    font-weight: bold;
  }
`;

function RoomButtonPresenter({ children, team, currentNum, maxNum, onClick }) {
  return (
    <StyledRoomButtonWrapper>
      <StyledRoomButton onClick={onClick}>
        <StyledTeamImage src={`/${team}.png`} alt={`${team} logo`} />
        {children}
        <StyledSpan>
          <strong>{currentNum}</strong>
          {` / ${maxNum}`}
        </StyledSpan>
      </StyledRoomButton>
    </StyledRoomButtonWrapper>
  );
}

export default RoomButtonPresenter;
