import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState } from 'draft-js';
import { isHexColor } from 'validator';
import nameThisColor from 'name-this-color';
import { updateColors } from '../../actions';
import styles from './ColorInput.scss';

class ColorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    const plainText = editorState.getCurrentContent().getPlainText();
    const hexValues = this.toHexValues(plainText);
    const colors = this.toColorName(hexValues);

    this.props.dispatch(updateColors(colors));
    this.setState({ editorState });
  }

  toHexValues(value) {
    return value.replace(/^\s*[\r\n]/gm, '');
  }

  toColorName(hexValues) {
    const colors = hexValues.split('\n').filter(value => isHexColor(value));
    return nameThisColor(colors);
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className={styles.ColorInput}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ColorInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ColorInput);
