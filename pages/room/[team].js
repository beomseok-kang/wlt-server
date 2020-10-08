import teams from "../../client/teams.json";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import ChatSocketContainer from "../../client/components/containers/Room/ChatSocketContainer";
import axios from "axios";
import { API_GET_URL } from "../../client/api/url";
import RoomHeaderPresenter from "../../client/components/presenters/Room/RoomHeaderPresenter";
import UnfoundPage from "../404";

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function RoomPage({ url }) {
  const { team } = useRouter().query;

  if (!teams.includes(team)) {
    return <UnfoundPage />;
  }
  return (
    <StyledPageWrapper>
      <RoomHeaderPresenter team={team} />
      <ChatSocketContainer url={url} team={team} />
    </StyledPageWrapper>
  );
}

RoomPage.getInitialProps = async () => {
  const json = await axios.get(API_GET_URL);
  const { url } = json.data;
  return { url };
};

export default RoomPage;
