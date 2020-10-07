import { headerHeight } from "../components/presenters/Room/RoomHeaderPresenter";
import { chatterHeight } from "../components/presenters/Room/ChatterPresenter";
import { addRem } from "./funcLib";
import store from "../redux/store";

export const rem = 16;

export const getRandomPosition = ({ width: cWidth, height: cHeight }) => {
  // c = chat, w = window, f = frame (iframe)
  const { width: fWidth, height: wHeight } = store.getState().window;
  const fHeight = wHeight - addRem([headerHeight, chatterHeight]) * rem;
  const left = Math.random() * (fWidth - cWidth);
  const top = Math.random() * (fHeight - cHeight);
  return { left, top };
};
