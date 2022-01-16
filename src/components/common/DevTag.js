import React from "react";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import { Typography, Box } from "@material-ui/core";

export default function Chips(props) {
  var name = props.icon;
  name = name.charAt(0).toUpperCase() + name.substring(1);

  return (
    <div style={{ display: "inline-block" }}>
      <Box
        p={0.5}
        style={{
          backgroundColor: "lightgrey",
          marginRight: 8,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 15,
        }}
        display="flex"
        alignItems="center"
      >
        <Box>
          <i
            style={{ marginRight: 12 }}
            className={`devicon-${props.icon}`}
          ></i>
        </Box>

        <Box>
          <Typography variant="body1">
            {props.name ? props.name : name}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
