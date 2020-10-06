import teams from "../../client/teams.json";
import { useRouter } from "next/router";
import styled from "styled-components";
import RoomHeaderContainter from "../../client/components/containers/Room/RoomHeaderContainer";
import ChatSocketContainer from "../../client/components/containers/Room/ChatSocketContainer";

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function RoomPage() {
  const { team } = useRouter().query;

  const _buildBody = (
    <>
      <StyledPageWrapper>
        <RoomHeaderContainter />
        <ChatSocketContainer team={team} />
      </StyledPageWrapper>
    </>
  );

  const _buildDNEBody = ( // the team does not exist
    <>
      <div>The team does not exist.</div>
    </>
  );

  if (!teams.includes(team)) {
    return _buildDNEBody;
  }
  return _buildBody;
}

export default RoomPage;
