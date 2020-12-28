import React from "react";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";

export default function Chips(props) {
  var name = props.icon;
  name = name.charAt(0).toUpperCase() + name.substring(1);

  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          backgroundColor: "#ccc",
          borderRadius: 4,
          fontSize: "1.1em",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          padding: 4,
          paddingRight: 12,
          marginRight: 8,
          marginBottom: 8,
          marginTop: 8,
          paddingLeft: 8,
          justifyContent: "center",
        }}
      >
        <i style={{ marginRight: 4 }} className={`devicon-${props.icon}`}></i>

        {props.name ? props.name : name}
      </div>
    </div>
  );
}
