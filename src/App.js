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

  const [toDoArr, setToDoArr] = useState([]);
  const [memoArr, setMemoArr] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [myDate, setMyDate] = useState();

  /* 모달 날짜 함수 */
  const prevDate = () => {
    let sampleDate = new Date(myDate);
    sampleDate.setDate(sampleDate.getDate() - 1);
    setMyDate(String(sampleDate));
  };

  const nextDate = () => {
    let sampleDate = new Date(myDate);
    sampleDate.setDate(sampleDate.getDate() + 1);
    setMyDate(String(sampleDate));
  };

  /* 메모 함수 */
  // 메모 Id
  const nextMemoId = useRef(0);

  // memo 추가
  const onInsert = useCallback(
    (text) => {
      if (!text) return null;
      const modalMemo = {
        id: nextMemoId.current,
        text,
        check: {
          id: nextMemoId.current,
          checked: false,
        },
        point: {
          id: nextMemoId.current,
          pointed: false,
        },
      };
      setMemoArr(memoArr.concat(modalMemo));
      nextMemoId.current += 1;
    },
    [memoArr],
  );

  // 메모 삭제
  const onRemove = useCallback(
    (id) => {
      setMemoArr(memoArr.filter((modalMemo) => modalMemo.id !== id));
    },
    [memoArr],
  );

  // 메모 체크
  const onCheck = useCallback(
    (id) => {
      setMemoArr(
        memoArr.map((modalMemo) =>
          modalMemo.id === id
            ? {
                ...modalMemo,
                check: { checked: !modalMemo.check.checked },
              }
            : modalMemo,
        ),
      );
    },
    [memoArr],
  );

  // 메모 중요 표시
  const onPoint = useCallback(
    (id) => {
      setMemoArr(
        memoArr.map((modalMemo) =>
          modalMemo.id === id
            ? { ...modalMemo, point: { pointed: !modalMemo.point.pointed } }
            : modalMemo,
        ),
      );
    },
    [memoArr],
  );

  /* 모달 함수 */
  // toDo Id
  const nextToDoId = useRef(0);

  // todo 생성
  const onCreateToDoItem = useCallback(() => {
    setIsAddModal(false);
    if (memoArr.length === 0) return null;
    const toDoItem = {
      id: nextToDoId.current,
      memoArr,
      cal: myDate,
    };
    setToDoArr([...toDoArr, toDoItem]);
    nextToDoId.current += 1;
    setMemoArr([]);
  }, [toDoArr, memoArr, myDate]);

  // todo 삭제
  const onDeleteToDo = useCallback(
    (id) => {
      setToDoArr(toDoArr.filter((toDoItem) => toDoItem.id !== id));
    },
    [toDoArr],
  );

  // todoAddModal 열기
  const openAddModal = () => {
    setIsAddModal(true);
    setMemoArr([]);
    setSelectedId(null);
    setMyDate(String(new Date()));
  };

  // todoEditModal 열기
  const openEditModal = useCallback(
    (id) => {
      setIsEditModal(true);
      setSelectedId(id);

      toDoArr.forEach((toDoItem) => {
        if (toDoItem.id === id) {
          setMemoArr(toDoItem.memoArr);
          setMyDate(new Date(toDoItem.cal));
        }
      });
    },
    [toDoArr],
  );

  // todo 수정
  const onUpdateToDoItem = useCallback(() => {
    setToDoArr(
      toDoArr.map((toDoItem) =>
        toDoItem.id === selectedId
          ? {
              ...toDoItem,
              cal: myDate,
              memoArr: memoArr,
            }
          : toDoItem,
      ),
    );
    if (memoArr.length === 0) {
      onDeleteToDo(selectedId);
    }
    setIsEditModal(false);
    setMemoArr([]);
    setSelectedId(null);
  }, [toDoArr, memoArr, selectedId, onDeleteToDo, myDate]);

  return (
    <>
      <Header />
      <Main
        monthStr={monthStr}
        dayStr={dayStr}
        memoArr={memoArr}
        toDoArr={toDoArr}
        isAddModal={isAddModal}
        isEditModal={isEditModal}
        onInsert={onInsert}
        onRemove={onRemove}
        onCheck={onCheck}
        onPoint={onPoint}
        onCreateToDoItem={onCreateToDoItem}
        onDeleteToDo={onDeleteToDo}
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
