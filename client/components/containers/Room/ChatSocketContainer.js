import ChatWrapperContainer from "./ChatWrapperContainer";
import ChatterContainer from "./ChatterContainer";

function ChatSocketContainer({ team }) {
  return (
    <>
      <ChatWrapperContainer />
      <ChatterContainer team={team} />
    </>
  );
}

export default ChatSocketContainer;
