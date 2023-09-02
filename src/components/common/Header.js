import styled from 'styled-components';
import { useRef, useEffect } from 'react';

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
  const headerRef = useRef();
  const headerShadowing = () => {
    if (window.pageYOffset === 0) {
      headerRef.current.style.boxShadow = 'none';
    } else {
      headerRef.current.style.boxShadow = '1px 5px 10px gray';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerShadowing);
    headerShadowing();
    return () => {
      window.removeEventListener('scroll', headerShadowing);
    };
  }, []);

  return (
    <HeaderBlock ref={headerRef}>
      <h1>TO DO LIST</h1>
    </HeaderBlock>
  );
};

export default Header;
