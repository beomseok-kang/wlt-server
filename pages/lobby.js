import RoomListContainer from "../client/components/containers/Lobby/RoomListContainer";
import styled from "styled-components";

const StyledDivCenter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LobbyPage() {
  const _buildBody = (
    <StyledDivCenter>
      <RoomListContainer />
    </StyledDivCenter>
  );

  return _buildBody;
}

export default LobbyPage;
