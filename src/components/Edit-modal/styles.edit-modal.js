import styled from "styled-components";
import { Flex } from "../../Routes/Navigation/styles.navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "../Hero/styles.hero";

export const EditContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  backdrop-filter: blur(6px);

  ${Flex};
`;
export const EditInputContainer = styled.form`
  ${Flex};
  justify-content: center;
  width: 80%;
  ${"" /* background: rgba(255, 255, 255, 0.01); */}
  background: rgba(0, 0, 0);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: auto;
  position: relative;
  input {
      width: 80%;
    }
    textarea{
      width: 80%;

    }
  @media (max-width: 1000px) {
    width: 80%;
    input {
      width: 80%;
    }
  }
  @media (max-width: 750px) {
    width: 85%;
    input {
      width: 85%;
    }
    textarea{
      width: 85%;

    }
  }
`;

export const CloseModal = styled(AiOutlineCloseCircle)`
  color: black;
  padding: 3px;
  font-size: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  cursor: pointer;
  &:hover {
    color: dodgerblue;
  }
`;
export const EditBtn = styled(Button)`
  background: dodgerblue;
`;
