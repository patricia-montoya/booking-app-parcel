import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DateFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(event) {
    const { onDateChange } = this.props;
    onDateChange(event);
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
            <i className={iconText} />
          </span>
        </div>
      </div>
    );
  }
}

DateFilter.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  date: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DateFilter;
