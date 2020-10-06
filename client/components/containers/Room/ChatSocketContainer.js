import React, { useEffect } from "react";
import io from "socket.io-client";
import ChatWrapperContainer from "./ChatWrapperContainer";
import { ENDPOINT } from "../../../api/socket";
import { appendChat } from "../../../redux/reducers/chat";
import ChatterContainer from "./ChatterContainer";
import { useDispatch } from "react-redux";
import { getRandomPosition, rem } from "../../../lib/sizeAndPositioning";

function ChatSocketContainer({ team }) {
  const dispatch = useDispatch();

  const socket = io.connect(ENDPOINT, {
    path: "/socket",
    query: `team=${team}`,
  });
  socket.on("new-chat", ({ chat, id }) => {
    const { left, top } = getRandomPosition({
      width: chat.length * 2 * rem,
      height: 2 * rem,
    });
    dispatch(appendChat({ chat, left, top }, id));
  });

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <ChatWrapperContainer />
      <ChatterContainer socket={socket} />
    </>
  );
}

export default React.memo(ChatSocketContainer);
