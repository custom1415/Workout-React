import styled from "styled-components";
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26vw;
  background: whitesmoke;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    pointer-events: none;
  }
  @media (max-width: 1200px) {
    position: absolute;
    top: 0;
    left: 4vw;
    height: 100vh;
    width: 40%;
    z-index: 10;
    ${"" /* display:none; */}
  }
`;
export const FormInput = styled.input`
  border: none;
  width: 70%;
  box-shadow: 0 0 4px 0.5px rgb(0, 0, 0, 0.2);
  padding: 12px 18px;
  border-radius: 27px;
  margin-bottom: 2em;
  &::placeholder {
    font-size: 12px;
  }
`;
export const TextArea = styled.textarea`
  border: none;
  width: 70%;
  height: 150px;
  box-shadow: 0 0 4px 0.5px rgb(0, 0, 0, 0.2);
  padding: 12px 18px;
  border-radius: 27px;
  margin-bottom: 2em;
  resize: none;
`;
