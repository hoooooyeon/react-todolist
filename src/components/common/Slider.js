import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import AddModal from '../modal/AddModal';

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

const Slider = ({
  mdItems,
  mmItems,
  onInsert,
  onRemove,
  onPoint,
  onCheck,
  insertMemoItem,
  modalClose,
  modalOpen,
  selectedId,
  editModalClose,
  today,
  prevDate,
  nextDate,
}) => {
  return (
    <>
      <SliderBlock>
        <IconDiv>
          <StyledFontAwesomeIcon icon={faBars} />
        </IconDiv>
        <StyledUl>
          <StyledLi onClick={modalClose}>
            <StyledFontAwesomeIcon icon={faCalendarPlus} margin="true" />
            <p>Memo</p>
          </StyledLi>
        </StyledUl>
      </SliderBlock>
      {modalOpen && (
        <AddModal
          modalClose={modalClose}
          mdItems={mdItems}
          mmItems={mmItems}
          onInsert={onInsert}
          onRemove={onRemove}
          onPoint={onPoint}
          onCheck={onCheck}
          insertMemoItem={insertMemoItem}
          selectedId={selectedId}
          editModalClose={editModalClose}
          today={today}
          prevDate={prevDate}
          nextDate={nextDate}
        />
      )}
    </>
  );
};

export default Slider;
