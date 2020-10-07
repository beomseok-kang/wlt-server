import ChatWrapperContainer from "./ChatWrapperContainer";
import ChatterContainer from "./ChatterContainer";

function ChatSocketContainer({ team, url }) {
  return (
    <>
      <ChatWrapperContainer url={url} />
      <ChatterContainer team={team} />
    </>
  );
}

export default ChatSocketContainer;
