import styled from "styled-components";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

import { BiNote } from "react-icons/bi";

import { LargeFont, MediumFont } from "../../root-styles";
export const RemoveWorkoutBtn = styled(FaRegTrashAlt)`
  margin-left: 8px;
  color: black;
  font-size: 20px;
  padding: 2px;
  background: white;
`;
export const Note = styled.div`
  color: white;
  background: black;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  z-index: ${({ notes }) => (notes ? "10" : "0")};
  transform: translate(-50%, -50%);
  padding: 13px;
  font-size: 20px;
  transition: 0.3s ease;
  opacity: ${({ notes }) => (notes ? "1" : "0")};
`;

export const CardContainer = styled.div`
background-color:black;
height:auto;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
overflow:hidden;
padding:12px;
position:relative;
border:0.2px solid white;
transition:0.3s;
h1{
width: 94%;
    color:white;
    margin:0;
    margin-bottom:0.5em;
  ${LargeFont}
}
&:hover{
border:0.2px solid dodgerblue;
box-shadow:0 0 8px 2px dodgerblue;
transform:scale(1.01);

}




}`;

export const WorkoutDetailsContainer = styled.div`
  width: 94%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    color: dodgerblue;
  }
`;
export const WorkoutDetail = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  margin-bottom: 0.3em;
  height: auto;
  padding-left: 5px;
  h2 {
    ${MediumFont}
    margin: 0;
  }
`;
export const Edit = styled(AiOutlineEdit)`
  color: black;
  padding: 1px;

  background: white;
  font-size: 20px;
  margin-left: 8px;
`;
export const NoteBtn = styled(BiNote)`
  color: black;
  padding: 1px;
  background: white;
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;
`;
export const UtilityBtnContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 2;
  svg{
  &:hover {
    color: dodgerblue;
  }
`;
