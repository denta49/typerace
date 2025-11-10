import React, { FunctionComponent } from "react";

import StatePropsType from "@/types/uiTypes/StatePropsType";
const State: FunctionComponent<StatePropsType> = ({ message, kind }) => {
  return (
    <div>
      {message}
      {kind}
    </div>
  );
};

export default State;
