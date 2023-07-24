import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Noise.module.css";

export function Noise({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "noise")} tag="div">
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "noise_css")}
        value="%3Cstyle%3E%0A%20%20%0A.noise%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%7D%20%20%0A%0A%20%20%40keyframes%20noiseAnimation%20%7B%0A%20%20%20%200%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(0)%0A%20%20%20%20%7D%0A%20%20%20%2010%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(-5%25%2C-5%25)%0A%20%20%20%20%7D%0A%20%20%20%2020%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(-10%25%2C5%25)%0A%20%20%20%20%7D%0A%20%20%20%2030%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(5%25%2C-10%25)%0A%20%20%20%20%7D%0A%20%20%20%2040%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(-5%25%2C15%25)%0A%20%20%20%20%7D%0A%20%20%20%2050%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(-10%25%2C5%25)%0A%20%20%20%20%7D%0A%20%20%20%2060%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(15%25)%0A%20%20%20%20%7D%0A%20%20%20%2070%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translateY(10%25)%0A%20%20%20%20%7D%0A%20%20%20%2080%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(-15%25)%0A%20%20%20%20%7D%0A%20%20%20%2090%25%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(10%25%2C5%25)%0A%20%20%20%20%7D%0A%20%20%20%20to%20%7B%0A%20%20%20%20%20%20%20%20transform%3A%20translate(5%25)%0A%20%20%20%20%7D%0A%7D%0A%0A%20%20%0A.noise%3Aafter%20%7B%0A%20%20%20%20content%3A%20%22%22%3B%0A%20%20%20%20pointer-events%3A%20none%3B%0A%20%20%20%20will-change%3A%20transform%3B%0A%20%20%20%20animation%3A%20noiseAnimation%203s%20steps(4)%20infinite%3B%0A%20%20%20%20opacity%3A%200.7%3B%0A%20%20%20%20background-image%3A%20url(%22https%3A%2F%2Fuploads-ssl.webflow.com%2F61951265d7110a723766c703%2F61951306d6dbb6562f844696_Noise.png%22)%3B%0A%20%20%20%20width%3A%20200%25%3B%0A%20%20%20%20height%3A%20200%25%3B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%20-50%25%3B%0A%20%20%20%20left%3A%20-50%25%3B%0A%20%20%20%20%7D%0A%20%20%0A%20%20%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
