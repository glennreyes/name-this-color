import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './ColorOutput.scss';

const ColorOutput = ({ colors }) => {
  const colorItems = colors.map(color => (
    <span className={styles.ColorOutput__item} style={{ color: color.hex }}>
      {color.name}
    </span>
  ));

  return (<section className={styles.ColorOutput}>{colorItems}</section>);
};

ColorOutput.propTypes = {
  colors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  colors: state.colors,
});

export default connect(mapStateToProps)(ColorOutput);
