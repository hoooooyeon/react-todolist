import styled from 'styled-components';
import IconDiv from './IconDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuIcon } from '@fortawesome/fa-solid fa-bars';

const SliderBlock = styled.div`
  background-color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 999;
  transition: width 0.3s;
`;

const NavIconDiv = styled.IconDiv`
  margin: 5px 0 0 6px;
`;

const Slider = () => {
  return (
    <SliderBlock>
      <NavIconDiv>
        <FontAwesomeIcon icon={menuIcon} />
      </NavIconDiv>
    </SliderBlock>
  );
};

export default Slider;
