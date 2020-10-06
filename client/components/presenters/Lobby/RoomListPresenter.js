import styled from "styled-components";

const StyledUnorderedList = styled.ul`
  /* size and settings */
  width: 50rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin: 0;

  /* theme */
  background: tomato;
`;

function RoomListPresenter({ children }) {
  return <StyledUnorderedList>{children}</StyledUnorderedList>;
}

export default RoomListPresenter;
