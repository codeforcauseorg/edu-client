import React, { lazy, Suspense } from "react";

const Content = lazy(() => import("!babel-loader!mdx-loader!./Privacy.mdx"));

function Privacy() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}

export default Privacy;
