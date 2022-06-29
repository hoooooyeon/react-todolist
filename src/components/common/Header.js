import styled from 'styled-components';

const HeaderBlock = styled.div`
  width: 100%;
  height: 69px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  border-bottom: 1px solid #e0e7e9;
  background-color: white;

  h1 {
    font-size: 30px;
    margin: 0;
    color: #354649;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h1>TO DO LIST</h1>
    </HeaderBlock>
  );
};

export default Header;
