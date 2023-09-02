import './App.css';
import Header from './components/common/Header';
import Main from './components/Main';
import { useState, useRef, useCallback } from 'react';

function App() {
  const monthStr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayStr = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  let today = new Date();

  const [mdItems, setMdItems] = useState();
  const [mmItems, setMmItems] = useState([]);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
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
  const onCreateToDoItem = useCallback(() => {
    setIsAddModal(false);
    if (mdItems.length === 0) return null;
    const mmItem = {
      id: nextMmId.current,
      mdItems,
      cal: myDate,
    };
    if (mdItems === []) return null;
    setMmItems(mmItems.concat(mmItem));
    nextMmId.current += 1;
    setMdItems([]);
  }, [mmItems, mdItems, myDate]);

  const removeMemoItem = useCallback(
    (id) => {
      setMmItems(mmItems.filter((mmItem) => mmItem.id !== id));
    },
    [mmItems],
  );

  // 생성 모달 열기
  const openAddModal = () => {
    // setModalOpen(!modalOpen);
    setIsAddModal(true);
    setMdItems([]);
    setSelectedId();
    setMyDate(String(today));
  };

  // edit 모달 열고 닫기
  const openEditModal = useCallback(
    (id) => {
      // setModalOpen(!modalOpen);
      setIsEditModal(true);
      setSelectedId(id);

      mmItems.map((mmItem) => {
        if (mmItem.id === id) {
          setMdItems(mmItem.mdItems);
        }
        return mdItems;
      });
    },
    [isEditModal, mmItems, mdItems],
  );

  const onUpdateToDoItem = useCallback(() => {
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
    setIsEditModal(false);
    setMdItems([]);
    setSelectedId();
  }, [mmItems, isEditModal, mdItems, selectedId]);

  return (
    <>
      <Header />
      <Main
        monthStr={monthStr}
        dayStr={dayStr}
        mdItems={mdItems}
        mmItems={mmItems}
        isAddModal={isAddModal}
        isEditModal={isEditModal}
        onInsert={onInsert}
        onRemove={onRemove}
        onCheck={onCheck}
        onPoint={onPoint}
        onCreateToDoItem={onCreateToDoItem}
        removeMemoItem={removeMemoItem}
        openAddModal={openAddModal}
        openEditModal={openEditModal}
        onUpdateToDoItem={onUpdateToDoItem}
        selectedId={selectedId}
        myDate={myDate}
        prevDate={prevDate}
        nextDate={nextDate}
      />
    </>
  );
}

export default App;
