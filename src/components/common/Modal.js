import styled from 'styled-components';

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 997;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBlock = styled.div`
  position: absolute;
  z-index: 1;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem 1rem;
  background-color: white;
`;
const ModalContent = styled.div`
  padding: 0 0.5rem;
  margin: 0 auto;
`;

const ModalFooter = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  background-color: #e0e7e9;
  border: none;
  color: #6c7a89;
  font-weight: bold;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
`;

const Modal = ({ modalVisible, children, onModalConfirm }) => {
  if (!modalVisible) return null;

  return (
    <ModalBg onClick={onModalConfirm}>
      <ModalBlock>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <StyledButton onClick={onModalConfirm}>Confirm</StyledButton>
        </ModalFooter>
      </ModalBlock>
    </ModalBg>
  );
};

export default Modal;
