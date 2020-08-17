import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

export default function CertificateSkeleton() {
  return (
    <div style={{ width: 110 }}>
      <Skeleton width={100} height={100} style={{ margin: "auto" }}></Skeleton>
      <Typography variant="body" gutterBottom>
        <Skeleton></Skeleton>
      </Typography>
    </div>
  );
}
