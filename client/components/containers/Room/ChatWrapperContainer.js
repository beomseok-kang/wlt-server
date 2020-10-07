import YoutubeContainer from "./YoutubeContainer";
import ChatWrapperPresenter from "../../presenters/Room/ChatWrapperPresenter";
import { useSelector, useDispatch } from "react-redux";
import { updateWindowSize } from "../../../redux/reducers/window";
import { useEffect, useState } from "react";

const useSize = () => {
  const [size, setSize] = useState({ width: 1000, height: 700 });
  const dispatch = useDispatch();

  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    };

    setSize(getWindowDimensions());

    const handleResize = () => {
      setSize(getWindowDimensions());
      dispatch(updateWindowSize(size));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};

function ChatWrapperContainer() {
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const size = useSize();

  useEffect(() => {
    dispatch(updateWindowSize(size));
  }, [size, dispatch]);

  return (
    <ChatWrapperPresenter>
      <YoutubeContainer />
      {chat}
    </ChatWrapperPresenter>
  );
}

export default ChatWrapperContainer;
