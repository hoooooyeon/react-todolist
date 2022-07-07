import './App.css';
import Header from './components/common/Header';
import Memo from './components/memo/Memo';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [mdItems, setMdItems] = useState([]);
  const [mmItems, setMmItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();

  // 모달꺼
  const nextMdId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      // setMdItems([]);
      const mdItem = {
        id: nextMdId.current,
        text,
        checked: false,
        pointed: true,
      };
      setMdItems(mdItems.concat(mdItem));
      nextMdId.current += 1;
    },
    [mdItems],
  );

  const onRemove = useCallback(
    (id) => {
      setMdItems(mdItems.filter((mdItem) => mdItem.id !== id));
    },
    [mdItems],
  );

  const onPoint = useCallback(
    (id) => {
      setMdItems(
        mdItems.map((mdItem) =>
          mdItem.id === id ? { ...mdItem, pointed: !mdItem.pointed } : mdItem,
        ),
      );
    },
    [mdItems],
  );

  // 메모꺼
  const nextMmId = useRef(1);
  const insertMemoItem = useCallback(
    (mdItems) => {
      const mmItem = {
        id: nextMmId.current,
        mdItems,
      };
      setMmItems(mmItems.concat(mmItem));
      nextMmId.current += 1;

      setModalOpen(!modalOpen);
      setMdItems([]);
    },
    [mmItems, modalOpen],
  );

  const removeMemoItem = useCallback(
    (id) => {
      setMmItems(mmItems.filter((mmItem) => mmItem.id !== id));
      console.log(mmItems);
    },
    [mmItems],
  );

  // 모달 열고 닫기
  const modalClose = () => {
    setModalOpen(!modalOpen);
    setMdItems([]);
  };

  // edit 모달 열고 닫기
  const editModalOpen = useCallback(
    (id) => {
      setModalOpen(!modalOpen);
      setSelectedId(id);

      mmItems.map((mmItem) => {
        if (mmItem.id === id) {
          setMdItems(mmItem.mdItems);
        }
        return mdItems;
      });

      setMmItems(mmItems.filter((mmItem) => mmItem.id !== selectedId));
    },
    [modalOpen, mmItems, mdItems, selectedId],
  );

  const editModalClose = useCallback(() => {
    const mmItem = {
      id: selectedId,
      mdItems,
    };
    setMmItems(mmItems.concat(mmItem));

    setModalOpen(!modalOpen);
    setMdItems([]);
    setSelectedId();
  }, [mmItems, modalOpen, mdItems, selectedId]);
  return (
    <>
      <Header />
      <Memo
        mdItems={mdItems}
        onInsert={onInsert}
        onRemove={onRemove}
        onPoint={onPoint}
        mmItems={mmItems}
        insertMemoItem={insertMemoItem}
        removeMemoItem={removeMemoItem}
        modalClose={modalClose}
        modalOpen={modalOpen}
        editModalOpen={editModalOpen}
        editModalClose={editModalClose}
        selectedId={selectedId}
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
