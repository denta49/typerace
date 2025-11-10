import React, { FunctionComponent } from "react";

import FooterPropsType from "@/types/FooterPropsType";

const Footer: FunctionComponent<FooterPropsType> = ({ text }) => {
  return <footer>{text}</footer>;
};

export default Footer;
