import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ItemItemsBlock = styled.div`
  position: relative;
  width: 450px;
  height: 230px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a3c6c4;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e0e7e9;
  }
`;

const ModalItemBlock = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 10px 25px;
`;

const CheckBox = styled.input`
  display: none;
`;
const CheckBoxLabel = styled.label`
  width: 30px;
  height: 30px;
  border: 2px solid #e0e7e9;
  border-radius: 100px;
  background-color: white;
  position: relative;
  cursor: pointer;
  ${CheckBox}:checked + & {
    ::after {
      content: '✔';
      width: 30px;
      height: 30px;
      text-align: center;
      font-size: 25px;
      position: absolute;
      bottom: 3px;
      color: #6c7a89;
    }
  }
`;

const SelectedTextForm = styled.div`
  width: 250px;
  height: 32px;
  font-size: 20px;
  border: 2px solid #a3c6c4;
  border-radius: 5px;
  padding: 1px 8px 0 8px;
  ${(props) =>
    props &&
    css`
      color: ${(props) =>
        props.check.checked
          ? 'rgba(0, 0, 0, 0.3)'
          : props.point.pointed
          ? 'rgb(240, 12, 12)'
          : ''};
      text-decoration: ${(props) =>
        props.check.checked ? 'line-through' : 'null'};
    `}
`;

const TextForm = styled.div`
  width: 300px;
  height: 32px;
  font-size: 20px;
  border: 2px solid #a3c6c4;
  border-radius: 5px;
  padding: 1px 8px 0 8px;
  color: ${(props) => (props.point.pointed ? 'rgb(240, 12, 12)' : '')};
`;

const IconDiv = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  &:hover {
    border-radius: 100px;
    background-color: #e0e7e9;
    cursor: pointer;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #354649;
  font-size: 25px;
  margin: 4px 0 0 2px;
  text-align: center;
`;

const ModalMemoList = ({ mdItems, onPoint, onCheck, onRemove, selectedId }) => {
  return (
    <ItemItemsBlock>
      {mdItems.map((mdItem) => {
        const { id, text, check, point } = mdItem;

        return (
          <ModalItemBlock key={mdItem.id}>
            {selectedId ? (
              <>
                <CheckBox
                  type="checkbox"
                  checked={check.checked}
                  onChange={() => {}}
                />
                <CheckBoxLabel htmlFor={check.id} onClick={() => onCheck(id)} />
                <SelectedTextForm check={check} point={point}>
                  {text}
                </SelectedTextForm>
              </>
            ) : (
              <TextForm point={point}>{text}</TextForm>
            )}
            <div>
              <IconDiv onClick={() => onPoint(id)}>
                <StyledFontAwesomeIcon icon={faExclamation} />
              </IconDiv>
              <IconDiv onClick={() => onRemove(id)}>
                <StyledFontAwesomeIcon icon={faTrashCan} />
              </IconDiv>
            </div>
          </ModalItemBlock>
        );
      })}
    </ItemItemsBlock>
  );
};
export default ModalMemoList;
