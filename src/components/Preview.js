import React from 'react';
import marked from 'marked';

const Preview = props => {
  const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace('<a', "<a target='_blank' ");
};
marked.setOptions({ renderer, gfm: true, breaks: true });
const markdown = marked(props.preview);
  return (
    <div className="card">
      <div id="preview" className="card-body" dangerouslySetInnerHTML={{__html: markdown}} />
    </div>
  );
};

export default Preview;
