import React, { Component } from 'react';
import styles from './ColorInput.scss';

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
  }

  handleChange(event) {
    const { value } = event.target
    this.setState({ value });
    console.log(value);
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

export default ColorInput;
