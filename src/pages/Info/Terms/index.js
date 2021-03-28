import React, { lazy, Suspense } from "react";

const Content = lazy(() => import("!babel-loader!mdx-loader!./Terms.mdx"));

function Terms() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}

export default Terms;
