import React, { Component } from 'react';
import ColorInput from '../../components/ColorInput';
import ColorOutput from '../../components/ColorOutput';
import styles from './HomeView.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomeView extends Component {
  render() {
    return (
      <main className={styles.HomeView}>
        <section className={styles.HomeView__side}><ColorInput /></section>
        <section className={styles.HomeView__side}><ColorOutput /></section>
      </main>
    );
  }
}
