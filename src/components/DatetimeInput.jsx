import React from 'react';
import moment from 'moment';

const DatetimeInput = ({ value, onChange, setDate, setTime }) => {
  const dateFormat = 'YYYY-MM-DDTHH:mm';

  const handleChange = (e) => {
    const selectedDate = moment(e.target.value, dateFormat);
    onChange(selectedDate);
    setDate(selectedDate.format('DD.MM.YYYY'))
    setTime(selectedDate.format('HH:mm'))
  };

  return (
    <input
      type="datetime-local"
      value={value.format(dateFormat)}
      onChange={handleChange}
    />
  );
};

export default DatetimeInput;
