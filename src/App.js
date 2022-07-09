import './App.css';
import Header from './components/common/Header';
import Memo from './components/memo/Memo';
import { useState, useRef, useCallback } from 'react';

function App() {
  let today = new Date();
  let _today = String(today);

  const [mdItems, setMdItems] = useState([]);
  const [mmItems, setMmItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [myDate, setMyDate] = useState();

  setMyDate(_today);

  // 모달 헤더 날짜
  const prevDate = (id) => {
    mmItems.map((mmItem) => {
      if (mmItem.id === id) {
        let memoDate = new Date(mmItem.cal.myDate);
        memoDate.setDate(memoDate.getDate() - 1);
        setMyDate(memoDate);

        return mmItem;
      }
      myDate.setDate(myDate.getDate() - 1);

      return mmItem;
    });
  };
  const nextDate = (id) => {
    mmItems.map((mmItem) => {
      if (mmItem.id === id) {
        let memoDate = new Date(mmItem.cal);
        memoDate.setDate(memoDate.getDate() + 1);
        setMyDate(memoDate);
        return mmItem;
      }
      myDate.setDate(myDate.getDate() + 1);
      return mmItem;
    });
  };

  // 모달꺼
  const nextMdId = useRef(1);
  const onInsert = useCallback(
    (text) => {
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

  // 메모꺼
  const nextMmId = useRef(1);
  const insertMemoItem = useCallback(
    (mdItems) => {
      const mmItem = {
        id: nextMmId.current,
        mdItems,
        cal: myDate,
      };
      setMmItems(mmItems.concat(mmItem));
      nextMmId.current += 1;

      setModalOpen(!modalOpen);
      setMdItems([]);
    },
    [mmItems, modalOpen, myDate, _today],
  );

  const removeMemoItem = useCallback(
    (id) => {
      setMmItems(mmItems.filter((mmItem) => mmItem.id !== id));
    },
    [mmItems],
  );

  // 모달 열고 닫기
  const modalClose = () => {
    setModalOpen(!modalOpen);
    setMdItems([]);
    setSelectedId();
  };

  // edit 모달 열고 닫기
  const editModalOpen = useCallback(
    (id) => {
      setModalOpen(!modalOpen);
      setSelectedId(id);

      mmItems.map((mmItem) => {
        if (mmItem.id === id) {
          setMdItems(mmItem.mdItems);
          // setMmItems(mmItems.filter((mmItem) => mmItem.id !== id));
        }
        return mdItems;
      });
    },
    [modalOpen, mmItems, mdItems],
  );

  const editModalClose = useCallback(() => {
    // const _mmItem = {
    //   id: selectedId,
    //   mdItems,
    // };
    // setMmItems(mmItems.concat(mmItem));
    setMmItems(
      mmItems.map((mmItem) =>
        mmItem.id === selectedId
          ? {
              ...mmItem,
              cal: myDate,
              mdItems: mdItems,
            }
          : mmItem,
      ),
    );
    setModalOpen(!modalOpen);
    setMdItems([]);
    setSelectedId();
  }, [mmItems, modalOpen, mdItems, selectedId, myDate]);

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

/**
 * 모달 헤더 날짜 함수
 * 네비게이션 여닫이
 * masonry
 */
