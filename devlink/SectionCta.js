import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionCta.module.css";

export function SectionCta({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "cta_section")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-medium")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "cta_container")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cta_txt")}
                tag="h2"
              >
                {"Nobody wins unless,"}
                <br />
                <_Builtin.Span className={_utils.cx(_styles, "cta_span")}>
                  {"everybody wins."}
                </_Builtin.Span>
              </_Builtin.Heading>
              <_Builtin.Link
                className={_utils.cx(_styles, "cta_marquee")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "css-marquee")}
                  value="%3Cstyle%3E%0A%40keyframes%20scroll%20%7B%0A%20%20from%20%7B%0A%20%20%20%20transform%3A%20translateX(0)%3B%0A%20%20%7D%0A%20%20to%20%7B%0A%20%20%20%20transform%3A%20translateX(calc(-100%25%20-%201rem))%3B%0A%20%20%7D%0A%7D%0A%0A.scroll%20%7B%0A%20%20animation%3A%20scroll%207s%20linear%20infinite%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cta_marquee-content",
                    "scroll"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta_talk-to-us")}
                    tag="div"
                  >
                    {"TALKTOUS 🔗"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta_talk-to-us")}
                    tag="div"
                  >
                    {"TALKTOUS 🔗"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "cta_marquee-content",
                    "scroll"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta_talk-to-us")}
                    tag="div"
                  >
                    {"TALKTOUS 🔗"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "cta_talk-to-us")}
                    tag="div"
                  >
                    {"TALKTOUS 🔗"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
