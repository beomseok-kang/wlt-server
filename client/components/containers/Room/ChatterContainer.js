import ranStr from "crypto-random-string";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRandomPosition, rem } from "../../../lib/sizeAndPositioning";
import { appendChat } from "../../../redux/reducers/chat";
import ChatterPresenter from "../../presenters/Room/ChatterPresenter";

function ChatterContainer({ socket }) {
  const [chat, setChat] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (event) => {
    setChat(event.target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (chat) {
      const id = ranStr({ length: 10 });
      const { left, top } = getRandomPosition({
        width: chat.length * 2 * rem,
        height: 2 * rem,
      });
      socket.emit("chat", { chat, id });
      dispatch(appendChat({ chat, left, top }, id));
    }
    setChat("");
  };
  return (
    <ChatterPresenter
      value={chat}
      onChangeInput={onChangeInput}
      onSubmitForm={onSubmitForm}
    />
  );
}

export default ChatterContainer;
