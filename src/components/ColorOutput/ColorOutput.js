import React from 'react';
import { connect } from 'react-redux';
// import Highlight from 'react-highlight.js';
import styles from './ColorOutput.scss';

const ColorOutput = () => (
  <div className={styles.ColorOutput}>
    {'var foo = "bar";'}
  </div>
);

export default connect()(ColorOutput);
