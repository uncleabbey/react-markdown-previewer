import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

import { initialMarkUp } from "./InitialMD";
const Markdown = () => {
  const [preview, setPreview] = useState(initialMarkUp);
  const handleChange = e => {
    setPreview(e.target.value);
  };
  return (
    <div>
      <h1 className="text-primary">MarkDown Previewer</h1>
      <Editor handleChange={handleChange} markUp={preview} />
      <Preview preview={preview} />
    </div>
  );
};

export default Markdown;
