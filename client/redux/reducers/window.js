const UPDATE_WINDOW_SIZE = "window/UPDATE_WINDOW_SIZE";

export const updateWindowSize = (size) => ({
  type: UPDATE_WINDOW_SIZE,
  payload: size,
});

//state

const initialState = {
  width: 0,
  height: 0,
};

// reducer

export default function window(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WINDOW_SIZE:
      return action.payload;
    default:
      return state;
  }
}
