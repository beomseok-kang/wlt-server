import styled from "styled-components";

export const StyledWrapperDiv = styled.div`
  padding: 1rem;
  width: 50rem;
  border-radius: 1rem;

  box-shadow: 0px 0px 50px rgba(160, 160, 160, 1);
  background: #343a40;

  h1 {
    color: #fff;
    font-size: 2rem;
    margin: 0 0 1rem;
    text-align: center;
  }
`;

const StyledUnorderedList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin: 0;

  column-gap: 1rem;
  row-gap: 1rem;
`;

function RoomListPresenter({ children }) {
  return (
    <StyledWrapperDiv>
      <h1>#같이 봐요 #LCK</h1>
      <StyledUnorderedList>{children}</StyledUnorderedList>
    </StyledWrapperDiv>
  );
}

export default RoomListPresenter;
