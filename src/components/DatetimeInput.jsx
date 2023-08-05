import React from 'react';
import moment from 'moment';

const DatetimeInput = ({ selectedDate, onChange }) => {
  const handleChange = (e) => {
    const selectedDate = moment(e.target.value);
    onChange(selectedDate);
  };

  return (
    <input
      type="datetime-local"
      value={selectedDate.format('YYYY-MM-DDTHH:mm')}
      onChange={handleChange}
    />
  );
};

export default DatetimeInput;
