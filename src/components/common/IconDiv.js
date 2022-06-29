import styled from 'styled-components';

const IconDivBlock = styled.div`
  width: 35px;
  height: 35px;
  text-align: center;
  display: inline-block;

  &:hover {
    border-radius: 100px;
    background-color: #e0e7e9;
    cursor: pointer;
  }
`;

const IconDiv = () => {
  return <IconDivBlock />;
};

export default IconDiv;
