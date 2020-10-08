import styled from "styled-components";
import React from "react";
import { MdSend } from "react-icons/md";

export const chatterHeight = "4rem";

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  height: ${chatterHeight};
  background-color: #343a40;
  margin: 0;
  padding: 1rem;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: block;
  outline: none;
  padding: 0 0.5rem;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  border-radius: 4px;
  background: #e9ecef;

  transition: 0.2s;
  &:hover,
  &:focus {
    border-color: #ced4da;
  }
`;

const StyledButton = styled.button`
  position: relative;
  display: block;
  outline: none;
  border: none;
  margin-left: 1rem;
  padding: 0;
  font-size: 2rem;
  line-height: 1;
  width: 4rem;
  height: 2rem;
  border-radius: 4px;

  cursor: pointer;
  background: none;
  color: #e9ecef;
  transition: 0.2s;
  &:hover {
    color: #f8f9fa;
    &::after {
      content: "";
      width: 3rem;
      height: 3rem;
      border-radius: 1.5rem;
      position: absolute;
      right: 0.5rem;
      top: -0.5rem;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  /* background: #ced4da;
  transition: 0.2s;
  &:hover {
    background: #e9ecef;
  } */
`;

function ChatterPresenter({ value, onChangeInput, onSubmitForm }) {
  return (
    <StyledForm onSubmit={onSubmitForm}>
      <StyledInput value={value} onChange={onChangeInput} />
      <StyledButton type="submit">
        <MdSend />
      </StyledButton>
    </StyledForm>
  );
}

export default React.memo(ChatterPresenter);
