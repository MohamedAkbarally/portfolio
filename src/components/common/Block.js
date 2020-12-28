import React, { Fragment } from "react";
import PortableText from "@sanity/block-content-to-react";
import urlBuilder from "@sanity/image-url";
import { Button, Typography } from "@material-ui/core";
import DevTag from "./DevTag";

const urlFor = (source) =>
  urlBuilder({ projectId: "ekj8ng77", dataset: "production" }).image(source);

const serializer = {
  types: {
    image: (props) => (
      <Fragment>
        <img
          src={urlFor(props.node.asset).url()}
          style={{
            height: 400,
            maxWidth: "100%",
            margin: "auto",
            display: "block",
          }}
          alt={props.node.alt}
        />
      </Fragment>
    ),
    imagec: (props) => (
      <Fragment>
        <img
          src={urlFor(props.node.picture.asset).url()}
          style={{
            height: 400,
            maxWidth: "100%",
            margin: "auto",
            display: "block",
            marginBottom: 4,
          }}
          alt={props.node.alt}
        />
        <Typography
          variant="caption"
          display="block"
          style={{ textAlign: "center" }}
          gutterBottom
        >
          {props.node.caption}
        </Typography>
      </Fragment>
    ),
    tool: (props) => (
      <DevTag icon={props.node.icon} name={props.node.name}></DevTag>
    ),
  },
};

export default function Block({ value }) {
  return <PortableText serializers={serializer} blocks={value} />;
}
