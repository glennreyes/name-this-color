import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './ColorInput.scss';
import { isHexColor } from 'validator';
import nameThisColor from 'name-this-color';
import { setColorList } from '../../actions';

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  toColorName(hexValues) {
    const { dispatch } = this.props;
    const colors = hexValues.split('\n').filter(value => isHexColor(value));
    const namedColors = nameThisColor(colors);

    if (colors.length > 0) {
      dispatch(setColorList(namedColors));
    }
  }

  toHexValues(value) {
    return value.replace(/^\s*[\r\n]/gm, '');
  }

  handleChange(event) {
    const { value } = event.target;
    const hexValues = this.toHexValues(value);
    this.setState({ value: hexValues });
    this.toColorName(hexValues);
  }

  render() {
    const { value } = this.state;
    return (
      <textarea
        className={styles.ColorInput}
        onChange={this.handleChange}
        placeholder="Give me your HEX!"
        value={value}
      />
    );
  }
}

ColorInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ColorInput);
