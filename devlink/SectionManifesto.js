import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionManifesto.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionManifesto({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "manfiesto_section")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "manifest_components")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "manifesto_photo-container")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "manifesto-photo")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  src="https://uploads-ssl.webflow.com/64b8f189e7ffc183dd231657/64b93bb656c35c39256d1edc_manifesto-photo.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "manifesto_title-container")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading")}
                  tag="h1"
                >
                  <_Builtin.Strong className={_utils.cx(_styles, "bold-text")}>
                    {"•"}
                  </_Builtin.Strong>
                  {"Our"}
                  <br />
                  <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
                    {" Manifesto"}
                  </_Builtin.Span>
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn_play-video")}
                  data-w-id="7168d23b-743b-4951-8db2-a5a63ab41676"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "play-icon")}
                    value="%3Csvg%20viewbox%3D%22-3%200%2028%2028%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Asketch%3D%22http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%2Fns%22%20fill%3D%22%23000000%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%2F%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%2F%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Ctitle%3Eplay%3C%2Ftitle%3E%20%3Cdesc%3ECreated%20with%20Sketch%20Beta.%3C%2Fdesc%3E%20%3Cdefs%3E%20%3C%2Fdefs%3E%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20sketch%3Atype%3D%22MSPage%22%3E%20%3Cg%20id%3D%22Icon-Set%22%20sketch%3Atype%3D%22MSLayerGroup%22%20transform%3D%22translate(-417.000000%2C%20-569.000000)%22%20fill%3D%22currentColor%22%3E%20%3Cpath%20d%3D%22M418.983%2C594.247%20L418.983%2C571.722%20L436.831%2C582.984%20L418.983%2C594.247%20L418.983%2C594.247%20Z%20M438.204%2C581.536%20L419.394%2C569.279%20C418.278%2C568.672%20417%2C568.943%20417%2C570.917%20L417%2C595.052%20C417%2C597.012%20418.371%2C597.361%20419.394%2C596.689%20L438.204%2C584.433%20C439.288%2C583.665%20439.258%2C582.242%20438.204%2C581.536%20L438.204%2C581.536%20Z%22%20id%3D%22play%22%20sketch%3Atype%3D%22MSShapeGroup%22%3E%20%3C%2Fpath%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "manifesto_cards-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "manifesto_card", "is-1")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "manifest_number")}
                    tag="div"
                  >
                    {"01"}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "manifesto_txt")}
                    tag="h4"
                  >
                    {"We don’t do run-of-the-mill digital agency stuff."}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "manifesto_card", "is-2")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "manifest_number")}
                    tag="div"
                  >
                    {"02"}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "manifesto_txt")}
                    tag="h4"
                  >
                    {"We don’t do guesswork nor do we disperse."}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "manifesto_card", "is-3")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "manifest_number")}
                    tag="div"
                  >
                    {"03"}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "manifesto_txt")}
                    tag="h4"
                  >
                    {"We come in with equal parts art and science."}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "manifesto_card", "is-4")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "manifest_number")}
                    tag="div"
                  >
                    {"04"}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "manifesto_txt")}
                    tag="h4"
                  >
                    {
                      "We don’t do website cosmetics nor marketing party tricks."
                    }
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "manifesto_card", "is-5")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "manifest_number")}
                    tag="div"
                  >
                    {"05"}
                  </_Builtin.Block>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "manifesto_txt")}
                    tag="h4"
                  >
                    {"We do SEO but that’s just the starting line."}
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
