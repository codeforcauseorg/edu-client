import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeletonElement({ ...rest }) {
  return <Skeleton animation="wave" {...rest} />;
}

export default SkeletonElement;
