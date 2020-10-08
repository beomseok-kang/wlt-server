import RoomListContainer from "../client/components/containers/Lobby/RoomListContainer";
import styled from "styled-components";
import axios from "axios";
import { API_GET_NUMPEOPLE } from "../client/api/socket";

export const StyledDivCenter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #343a40;
  background: url("/LCK-Logo-White.png");
  background-size: 900px;
  background-repeat: no-repeat;
`;

function LobbyPage({ numPeople }) {
  const _buildBody = (
    <StyledDivCenter>
      <RoomListContainer numPeople={numPeople} />
    </StyledDivCenter>
  );

  return _buildBody;
}

LobbyPage.getInitialProps = async () => {
  const res = await axios.get(API_GET_NUMPEOPLE);
  const json = res.data;
  return { numPeople: json };
};

export default LobbyPage;
