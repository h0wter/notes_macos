import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 15px 45px;
  background-image: linear-gradient(to bottom, #eceaec, #cacaca);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: 2px solid #9c9c9c;
`;

export const ButtonsList = styled.ul`
  display: flex;
  margin-right: 15px;
`;

export const ButtonsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  width: 75px;
  height: 40px;
  background-color: #f7f7f8;
  border-radius: 5px;
  /* border: 1px solid #adadad; */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

export const StyledPlusIcon = styled(FaPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledTrashIcon = styled(BsTrash3)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledEditIcon = styled(FiEdit)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-30%, -50%);
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 350px;
`;

export const StyledSearchInput = styled.input`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: #a8a8a5;
  height: 100%;
  width: 100%;
  padding-left: calc(30% + 25px);
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border: none;

  &::placeholder {
    color: #a8a8a5;
  }

  &:focus {
    outline: none;
  }
`;
