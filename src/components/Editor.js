import React from 'react';

const Editor = props => {
  return (
    <textarea id="editor" className="col-sm-6" onChange={props.handleChange} value={props.markUp} />
  );
};

export default Editor;
