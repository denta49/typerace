import React, { FunctionComponent } from "react";

import SentencePropsType from "@/types/uiTypes/SentencePropsType";
const Sentence: FunctionComponent<SentencePropsType> = ({ sentence }) => {
  return <div>{sentence}</div>;
};

export default Sentence;
