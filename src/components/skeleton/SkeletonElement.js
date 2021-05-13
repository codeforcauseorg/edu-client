import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeletonElement({ variant, width, height }) {
  return <Skeleton animation="wave" variant={variant} width={width} height={height} />;
}

export default SkeletonElement;
