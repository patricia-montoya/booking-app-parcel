import React from 'react';

const DateFilter = ({ options, selected, icon }) => {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <div className="select" style={{ width: '100%' }}>
          <select style={{ width: '100%' }}>
            {options.map((option) => (
              <option value={option.value}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className="fas"></i>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
