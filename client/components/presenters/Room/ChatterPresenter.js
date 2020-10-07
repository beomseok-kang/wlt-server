import styled from "styled-components";

export const chatterHeight = "6rem";

const StyledForm = styled.form`
  height: ${chatterHeight};
  margin: 0;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background: #ffffff;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  width: 3rem;
  height: 3rem;
`;

function ChatterPresenter({ value, onChangeInput, onSubmitForm }) {
  return (
    <StyledForm onSubmit={onSubmitForm}>
      <StyledInput value={value} onChange={onChangeInput} />
      <StyledButton type="submit">전송</StyledButton>
    </StyledForm>
  );
}

export default ChatterPresenter;
