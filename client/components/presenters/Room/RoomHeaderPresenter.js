import styled from "styled-components";

/** The height of this block is important because it affects
 * the position of the chat blocks. The height of room header
 * should always taken into account in order to get correct
 * value of left and top properties of chat blocks.
 */

export const headerHeight = "6rem";

const StyledHeader = styled.header`
  height: ${headerHeight};
`;

function RoomHeaderPresenter() {
  return <StyledHeader>HELLO USER! 8:12</StyledHeader>;
}

export default RoomHeaderPresenter;
