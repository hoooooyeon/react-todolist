import styled from 'styled-components';

const EditModalHeaderBlock = styled.div`
  height: 15%;
  padding: 0;
  text-align: center;
`;

const Today = styled.h1`
  display: inline-block;
  color: #6c7a89;
  font-size: 30px;
  margin-top: 25px;
`;

const EditModalHeader = ({
  myDate,
  selectedId,
  mmItems,
  prevDate,
  nextDate,
}) => {
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

  let memoDate = '';
  mmItems.map((mmItem) => {
    if (mmItem.id === selectedId) {
      memoDate = new Date(mmItem.cal);
    }
    return mmItem;
  });

  return (
    <EditModalHeaderBlock>
      <Today>
        {`${dayStr[memoDate.getDay()]}, ${monthStr[memoDate.getMonth()]} 
${memoDate.getDate()}th`}
      </Today>
    </EditModalHeaderBlock>
  );
};

export default EditModalHeader;
