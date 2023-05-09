import {
  StyledButton,
  Header,
  StyledPlusIcon,
  StyledTrashIcon,
  StyledEditIcon,
  ButtonsList,
  ButtonsListItem,
  StyledSearchInput,
  InputWrapper,
  StyledSearchIcon,
} from "./Head.styled";

export const Head = () => {
  return (
    <Header>
      <ButtonsList>
        <ButtonsListItem>
          <StyledButton>
            <StyledPlusIcon size={25} color="#6E6F6D" />
          </StyledButton>
        </ButtonsListItem>
        <ButtonsListItem>
          <StyledButton>
            <StyledTrashIcon size={25} color="#6E6F6D" />
          </StyledButton>
        </ButtonsListItem>
        <ButtonsListItem>
          <StyledButton>
            <StyledEditIcon size={25} color="#6E6F6D" />
          </StyledButton>
        </ButtonsListItem>
      </ButtonsList>
      <InputWrapper>
        <StyledSearchIcon size={25} color="#6E6F6D" />
        <StyledSearchInput placeholder="Search" />
      </InputWrapper>
    </Header>
  );
};
