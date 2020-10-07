import ChatTextPresenter from "../../components/presenters/Room/ChatTextPresenter";

const APPEND_CHAT = "chat/APPEND_CHAT";
const REMOVE_CHAT = "chat/REMOVE_CHAT";
const REMOVE_ALL_CHAT = "chat/REMOVE_ALL_CHAT";

export const appendChat = ({ chat, left, top }, id) => ({
  type: APPEND_CHAT,
  payload: { chat, left, top },
  meta: id,
});
export const removeChat = (id) => ({
  type: REMOVE_CHAT,
  payload: id,
  meta: id,
});
export const removeAllChat = () => ({
  type: REMOVE_ALL_CHAT,
  payload: null,
});

// state

const initialState = [];

// reducer

export default function chat(state = initialState, action) {
  const { type, payload, meta } = action;

  switch (type) {
    case APPEND_CHAT:
      return state.concat(
        <ChatTextPresenter
          key={meta}
          chat={payload.chat}
          left={payload.left}
          top={payload.top}
        />
      );
    case REMOVE_CHAT:
      return state.filter((element) => element.key !== payload);
    case REMOVE_ALL_CHAT:
      return initialState;
    default:
      return state;
  }
}
