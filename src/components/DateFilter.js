import React from 'react';

class DateFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    this.props.onDateChange(event);
  }

  render() {
    const { date, icon } = this.props;

    const iconText = `fas ${icon}`;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="date"
            onChange={this.handleDateChange}
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
