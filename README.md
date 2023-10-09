# React-ToDoList
'Google Keep' 을 토대로 제작한 메모 형식의 ToDoList의 React 버전.

## 1. 제작 기간 & 참여 인원
- 2022년 06월 28일 ~ 2022년 07월 14일
- 개인 프로젝트
  
## 2. 사용 기술
- React

## 3. 링크

## 4. 업데이트
- 파일 구조 수정 및 code cleanUp. (23.09.03)
- Masonry layout 이슈 수정 (23.09. 04)

## 5. 사용 방법
1. 네비게이션 바에 ToDo 버튼을 눌러 모달을 생성한다.<br>
2. 모달의 헤더에 원하는 날짜를 선택한다. <br>
3. 생성된 모달에 text를 입력하고 ADD 버튼을 눌러 할 일 목록을 추가한다.<br>
4. Confirm 버튼을 눌러 ToDoItem을 생성한다.<br>
5. 생성 돼 있는 ToDoItem을 선택하여 해당 ToDoItem을 편집할 수 있다.<br>

## 6. 핵심 기능
### 6.1. ToDoItem 
![react-todolist](https://github.com/hoooooyeon/react-todolist/assets/92985196/4677f23e-ccdf-4a10-8aee-bb53bfbc9f14)

- 할 일 목록을 입력하고 이를 ToDoList로 만든다.
- 할 일 목록 중 완료하거나 중요 표시 효과를 줄 수 있다.

<details>
<summary>Code</summary>
<div markdown="1">
  
```
// App.js
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

// 할 일 추가
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

// 완료 표시
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

// 중요 표시
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
```

</div>
</details>


### 6.2. Masonry Layout
![todolist_masonry](https://github.com/hoooooyeon/todolist/assets/92985196/96502af5-6a15-4bbf-b8e7-8fa48ec594f8)

- 벽돌이 쌓이듯이 빈 공간이 없도록 ToDoList를 배치시키는 Masonry Layout 구현

<details>
<summary>Code</summary>
<div markdown="1">
  
```
// ToDoList.js
// masonry layout (수정시)
  useEffect(() => {
    if (listRef.current) {
      const childElements = Array.from(listRef.current.children);
      childElements.forEach((item) => {
        item.style.gridRowEnd = null;
        item.style.gridRowEnd = `${`span ${Math.ceil(
          item.getBoundingClientRect().height / 10,
        )}`}`;
      });
    }
  }, [listRef, toDoArr]);
```

```
// ToDoItem.js
// masonry layout (생성시)
  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.style.gridRowEnd = null;
      itemRef.current.style.gridRowEnd = `${`span ${Math.ceil(
        itemRef.current.offsetHeight / 10,
      )}`}`;
    }
  }, [itemRef]);
```
  
</div>
</details>

## 7. 기타 기능
- 네비게이션 바
- ToDoItem의 날짜 선택 기능

## 8. 트러블 슈팅
<details>
<summary>ToDoList 파일 구조 수정</summary>
<div markdown="1">

- 파일 구조의 비효율적이고 직관적이지 못한 부분들을 Code Clean Up 하는 과정을 가졌다.

</div>
</details>

<details>
<summary>Masonry layout 이슈</summary>
<div markdown="1">
  
- ToDoItem을 생성했을 때 item의 내부 컨텐츠만큼 높이가 측정되지 않아서 Masonry Layout이 제대로 구현되지 않는 이슈가 발생하였다.
- ToDoList.js와 ToDoItem.js으로 코드를 분리하고, 각각 함수를 주어 해결하였다.
  
</div>
</details>

## 9. 회고 & 느낀점
React를 공부하고 처음으로 제작한 개인 프로젝트이다. 
이전에 Vanilla Js로 만들었던 todolist 프로젝트를 React로 다시 제작하였다.
그리고 ToDoItem 생성과 날짜 수정 기능 등을 추가하여 좀 더 사용자 중심으로 제작하였다. 
이전 프로젝트를 보완하여 개선하는 과정이 상태 관리의 미숙함과 react에 대한 이해도를 성장시키는 경험이 되었다. 

