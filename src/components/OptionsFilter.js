import React from 'react';

class DateFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.props.onOptionChange(event);
  }

  render() {
    const { options, selected, icon } = this.props;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: '100%' }}>
            <select
              style={{ width: '100%' }}
              onChange={this.handleOptionChange}
            >
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
  }
}

export default DateFilter;
