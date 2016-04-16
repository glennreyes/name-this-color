import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetErrorMessage } from '../actions';
import '../styles/base.scss';

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
    const { children } = this.props;
    return (
      <div>
        {this.renderErrorMessage()}
        {children}
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
