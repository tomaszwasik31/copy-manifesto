import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eca09fb6-cff7-43eb-64f6-012a7002576b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eca09fb6-cff7-43eb-64f6-012a7002576b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689857281475},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eca09fb6-cff7-43eb-64f6-012a7002576b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eca09fb6-cff7-43eb-64f6-012a7002576b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1689857281476},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_MOVE","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-4","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eca09fb6-cff7-43eb-64f6-012a7002576e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eca09fb6-cff7-43eb-64f6-012a7002576e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-4-p","selectedAxis":"X_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":96,"restingState":50},{"continuousParameterGroupId":"a-4-p-2","selectedAxis":"Y_AXIS","basedOn":"ELEMENT","reverse":false,"smoothing":96,"restingState":50}],"createdOn":1689858736277}},"actionLists":{"a-2":{"id":"a-2","title":"hamburger-hover-in","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger_bg","selectorGuids":["d7198112-32b3-95c9-9127-6153e7fef944"]},"widthValue":0,"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger_svg","selectorGuids":["fde87a81-c66e-4f5e-d801-8d82061a6d2b"]},"globalSwatchId":"495b095d","rValue":238,"bValue":4,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-2-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger_svg","selectorGuids":["fde87a81-c66e-4f5e-d801-8d82061a6d2b"]},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger_bg","selectorGuids":["d7198112-32b3-95c9-9127-6153e7fef944"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1689857287012},"a-3":{"id":"a-3","title":"hamburger-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-3-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger_svg","selectorGuids":["fde87a81-c66e-4f5e-d801-8d82061a6d2b"]},"globalSwatchId":"495b095d","rValue":238,"bValue":4,"gValue":255,"aValue":1}},{"id":"a-3-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger_bg","selectorGuids":["d7198112-32b3-95c9-9127-6153e7fef944"]},"widthValue":0,"heightValue":0,"widthUnit":"%","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1689857287012},"a-4":{"id":"a-4","title":"hamburger-magnet","continuousParameterGroups":[{"id":"a-4-p","type":"MOUSE_X","parameterLabel":"Mouse X","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-4-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"PARENT","selector":".navbar_hamburger","selectorGuids":["c214869a-d4a8-f453-b814-5489764a8cbf"]},"xValue":-1,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-4-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"PARENT","selector":".navbar_hamburger","selectorGuids":["c214869a-d4a8-f453-b814-5489764a8cbf"]},"xValue":1,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}]},{"id":"a-4-p-2","type":"MOUSE_Y","parameterLabel":"Mouse Y","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"PARENT","selector":".navbar_hamburger","selectorGuids":["c214869a-d4a8-f453-b814-5489764a8cbf"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"PARENT","selector":".navbar_hamburger","selectorGuids":["c214869a-d4a8-f453-b814-5489764a8cbf"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}]}],"createdOn":1689858746117}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "navbar")} tag="nav">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-small")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar-container")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "logo")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "logo-txt")}
                  tag="div"
                >
                  {"Alts"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "navbar_hamburger")}
                data-w-id="eca09fb6-cff7-43eb-64f6-012a7002576b"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "hamburger_svg")}
                  value="%3Csvg%20viewbox%3D%220%20-0.5%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22SVGRepo_bgCarrier%22%20stroke-width%3D%220%22%2F%3E%3Cg%20id%3D%22SVGRepo_tracerCarrier%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cg%20id%3D%22SVGRepo_iconCarrier%22%3E%20%3Cpath%20d%3D%22M5.5%207.75C5.08579%207.75%204.75%208.08579%204.75%208.5C4.75%208.91421%205.08579%209.25%205.5%209.25V7.75ZM19.5%209.25C19.9142%209.25%2020.25%208.91421%2020.25%208.5C20.25%208.08579%2019.9142%207.75%2019.5%207.75V9.25ZM5.5%2011.75C5.08579%2011.75%204.75%2012.0858%204.75%2012.5C4.75%2012.9142%205.08579%2013.25%205.5%2013.25V11.75ZM17.5%2013.25C17.9142%2013.25%2018.25%2012.9142%2018.25%2012.5C18.25%2012.0858%2017.9142%2011.75%2017.5%2011.75V13.25ZM5.5%2015.75C5.08579%2015.75%204.75%2016.0858%204.75%2016.5C4.75%2016.9142%205.08579%2017.25%205.5%2017.25V15.75ZM12.5%2017.25C12.9142%2017.25%2013.25%2016.9142%2013.25%2016.5C13.25%2016.0858%2012.9142%2015.75%2012.5%2015.75V17.25ZM5.5%209.25H19.5V7.75H5.5V9.25ZM5.5%2013.25H17.5V11.75H5.5V13.25ZM5.5%2017.25H12.5V15.75H5.5V17.25Z%22%20fill%3D%22currentColor%22%2F%3E%20%3C%2Fg%3E%3C%2Fsvg%3E"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "hamburger_bg")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar_magnet-area")}
                  data-w-id="eca09fb6-cff7-43eb-64f6-012a7002576e"
                  tag="div"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
