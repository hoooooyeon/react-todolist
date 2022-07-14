import './App.css';
import Header from './components/common/Header';
import Memo from './components/memo/Memo';
import { useState, useRef, useCallback } from 'react';

function App() {
  let today = new Date();

  const [mdItems, setMdItems] = useState();
  const [mmItems, setMmItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [myDate, setMyDate] = useState();

  // 모달 헤더 날짜
  let sampleDate = '';
  const prevDate = () => {
    sampleDate = new Date(myDate);
    sampleDate.setDate(sampleDate.getDate() - 1);
    setMyDate(String(sampleDate));
  };

  const nextDate = () => {
    sampleDate = new Date(myDate);
    sampleDate.setDate(sampleDate.getDate() + 1);
    setMyDate(String(sampleDate));
  };

  // 모달
  const nextMdId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      if (!text) return null;
      const mdItem = {
        id: nextMdId.current,
        text,
        check: {
          id: nextMdId.current,
          checked: false,
        },
        point: {
          id: nextMdId.current,
          pointed: false,
        },
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

  const onCheck = useCallback(
    (id) => {
      setMdItems(
        mdItems.map((mdItem) =>
          mdItem.id === id
            ? {
                ...mdItem,
                check: { checked: !mdItem.check.checked },
              }
            : mdItem,
        ),
      );
    },
    [mdItems],
  );

  const onPoint = useCallback(
    (id) => {
      setMdItems(
        mdItems.map((mdItem) =>
          mdItem.id === id
            ? { ...mdItem, point: { pointed: !mdItem.point.pointed } }
            : mdItem,
        ),
      );
    },
    [mdItems],
  );

  // 메모
  const nextMmId = useRef(1);
  const insertMemoItem = useCallback(() => {
    if (mdItems.length === 0) return null;
    const mmItem = {
      id: nextMmId.current,
      mdItems,
      cal: myDate,
    };
    if (mdItems === []) return null;
    setMmItems(mmItems.concat(mmItem));
    nextMmId.current += 1;
    setModalOpen(!modalOpen);
    setMdItems([]);
  }, [mmItems, mdItems, modalOpen, myDate]);

  const removeMemoItem = useCallback(
    (id) => {
      setMmItems(mmItems.filter((mmItem) => mmItem.id !== id));
    },
    [mmItems],
  );

  // 생성 모달 열고 닫기
  const modalClose = () => {
    setModalOpen(!modalOpen);
    setMdItems([]);
    setSelectedId();
    setMyDate(String(today));
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
    },
    [modalOpen, mmItems, mdItems],
  );

  const editModalClose = useCallback(() => {
    if (mdItems.length === 0) return null;
    setMmItems(
      mmItems.map((mmItem) =>
        mmItem.id === selectedId
          ? {
              ...mmItem,
              mdItems: mdItems,
            }
          : mmItem,
      ),
    );
    setModalOpen(!modalOpen);
    setMdItems([]);
    setSelectedId();
  }, [mmItems, modalOpen, mdItems, selectedId]);

  return (
    <>
      <Header />
      <Memo
        mdItems={mdItems}
        mmItems={mmItems}
        onInsert={onInsert}
        onRemove={onRemove}
        onCheck={onCheck}
        onPoint={onPoint}
        insertMemoItem={insertMemoItem}
        removeMemoItem={removeMemoItem}
        modalClose={modalClose}
        modalOpen={modalOpen}
        editModalOpen={editModalOpen}
        editModalClose={editModalClose}
        selectedId={selectedId}
        myDate={myDate}
        prevDate={prevDate}
        nextDate={nextDate}
      />
    </>
  );
}

export default App;
