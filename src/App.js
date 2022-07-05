import './App.css';
import Header from './components/common/Header';
import Memo from './components/memo/Memo';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      const item = {
        id: nextId.current,
        text,
        checked: false,
        point: true,
      };
      setItems(items.concat(item));
      nextId.current += 1;
    },
    [items],
  );

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items],
  );

  const onPoint = useCallback(
    (id) => {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, point: !item.point } : item,
        ),
      );
    },
    [items],
  );
  return (
    <>
      <Header />
      <Memo
        items={items}
        onInsert={onInsert}
        onRemove={onRemove}
        onPoint={onPoint}
      />
    </>
  );
}

export default App;

/**
 * 모달 헤더 날짜 함수
 * 네비게이션 여닫이
 * 모달 point 함수
 */
