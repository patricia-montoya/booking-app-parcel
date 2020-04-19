import React from 'react';
import moment from 'moment';

class DateFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    this.props.onDateChange(event);
  }

  render() {
    const { date, icon, name } = this.props;

    const iconText = `fas fa-${icon}`;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="date"
            onChange={this.handleDateChange}
            name={name}
            value={
              moment(date).isValid() ? moment(date).format('YYYY-MM-DD') : ''
            }
          />
          <span className="icon is-small is-left">
            <i className={iconText}></i>
          </span>
        </div>
      </div>
    );
  }
}

export default DateFilter;
