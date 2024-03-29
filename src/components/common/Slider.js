import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const SliderBlock = styled.div`
  background-color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 70px;
  left: 0;
  transition: width 0.3s;
`;

const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 5px 0 0 6px;
  cursor: pointer;
  &:hover {
    border-radius: 100px;
    background-color: #e0e7e9;
    cursor: pointer;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  ${({ margin }) => {
    return margin ? `margin: 0 30px 0 13px` : `margin: 5px 0 0 7px;`;
  }}
`;

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledLi = styled.li`
  list-style-type: none;
  line-height: 50px;
  height: 47px;
  cursor: pointer;
  &:hover {
    border-radius: 0 20px 20px 0;
    background-color: #e0e7e9;
  }
  p {
    display: inline-block;
    font-size: 16px;
    margin: 0;
  }
`;

const Slider = ({ openAddModal }) => {
  return (
    <>
      <SliderBlock>
        <IconDiv>
          <StyledFontAwesomeIcon icon={faBars} />
        </IconDiv>
        <StyledUl>
          <StyledLi onClick={openAddModal}>
            <StyledFontAwesomeIcon icon={faCalendarPlus} margin="true" />
            <p>ToDo</p>
          </StyledLi>
        </StyledUl>
      </SliderBlock>
    </>
  );
};

export default Slider;
