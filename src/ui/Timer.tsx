import React, { FunctionComponent } from "react";

import TimerPropsType from "@/types/uiTypes/TimerPropsType";

const Timer: FunctionComponent<TimerPropsType> = ({ secondsLeft, total }) => {
  return (
    <>
      {secondsLeft}
      {total}
    </>
  );
};

export default Timer;
