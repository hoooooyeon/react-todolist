import styled, { css } from 'styled-components';

const buttonStyle = css`
  background-color: #e0e7e9;
  border: none;
  color: #6c7a89;
  font-weight: bold;
  border-radius: 5px;
  z-index: 1000;
`;

const StyledItemButton = styled.button`
  ${buttonStyle}

  width: 120px;
  height: 40px;
  font-size: 20px;
  position: relative;
  left: 25%;
  transform: translate(0, 150%);
  & + & {
    margin-left: 1rem;
  }
`;

const StyledListButton = styled.button`
  ${buttonStyle}

  width: 80px;
  height: 35px;
  font-size: 15px;
`;

const Button = ({ item, children, modalClose, insertMemoItem }) => {
  return item ? (
    <StyledItemButton modalClose={modalClose} inserMemoItem={insertMemoItem}>
      {children}
    </StyledItemButton>
  ) : (
    <StyledListButton>{children}</StyledListButton>
  );
};

export default Button;
