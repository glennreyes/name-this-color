import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetErrorMessage } from '../../actions';
import ColorInput from '../../components/ColorInput';
import ColorOutput from '../../components/ColorOutput';

// Default styles/themes
import 'highlight.js/styles/solarized-dark.css';
import 'draft-js/dist/Draft.css';

// App base styles
import '../../styles/base.scss';

// Component styles
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDismissClick = this.handleDismissClick.bind(this);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#" onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    );
  }

  render() {
    return (
      <div>
        {this.renderErrorMessage()}
        <main className={styles.App}>
          <section className={styles.App__side}><ColorInput /></section>
          <section className={styles.App__side}><ColorOutput /></section>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node,
};

const mapStateToProps = (state) => ({ errorMessage: state.errorMessage });

export default connect(mapStateToProps, { resetErrorMessage })(App);
