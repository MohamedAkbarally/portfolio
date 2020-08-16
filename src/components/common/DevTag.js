import React from "react";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";

const devIconStyle = {
  margin: "5px"
};
const IconStyle = {
  verticalAlign: "top",
  fontSize: "90%"
};
const pret = {
  marginTop: "2.5%"
};
export default function Chips(props) {
  var name = props.icon;
  name = name.charAt(0).toUpperCase() + name.substring(1);

  return (
    <Chip
      style={devIconStyle}
      icon={
        <Icon style={pret}>
          <i class={`devicon-${props.icon}`} style={IconStyle}></i>
        </Icon>
      }
      label={props.name ? props.name : name}
    />
  );
}