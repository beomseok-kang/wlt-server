import teams from "../../client/teams.json";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import RoomHeaderContainter from "../../client/components/containers/Room/RoomHeaderContainer";
import ChatSocketContainer from "../../client/components/containers/Room/ChatSocketContainer";
import axios from "axios";
import { API_GET_URL } from "../../client/api/url";

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function RoomPage({ url }) {
  const { team } = useRouter().query;

  const _buildBody = (
    <>
      <StyledPageWrapper>
        <RoomHeaderContainter />
        <ChatSocketContainer url={url} team={team} />
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

RoomPage.getInitialProps = async () => {
  const json = await axios.get(API_GET_URL);
  const { url } = json.data;
  return { url };
};

export default RoomPage;
