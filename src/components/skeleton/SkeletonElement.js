import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeletonElement({ ...rest }) {
  return <Skeleton animation="wave" {...rest} style={{ background: "#3740A1", opacity: 0.2 }} />;
}

export default SkeletonElement;
