import React from 'react';
import PropTypes from 'prop-types';

class OptionsFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    const { onOptionChange } = this.props;
    onOptionChange(event);
  }

  render() {
    const { options, selected, icon, name } = this.props;
    const iconText = `fas fa-${icon}`;

    return (
      <div className="field">
        <div className="control has-icons-left">
          <div className="select" style={{ width: '100%' }}>
            <select
              style={{ width: '100%' }}
              onChange={this.handleOptionChange}
              name={name}
              value={selected}
            >
              {options.map((option) => (
                <option key={option.name} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className={iconText} />
          </div>
        </div>
      </div>
    );
  }
}

OptionsFilter.propTypes = {
  onOptionChange: PropTypes.func.isRequired,
  options: PropTypes.node.isRequired,
  selected: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default OptionsFilter;
