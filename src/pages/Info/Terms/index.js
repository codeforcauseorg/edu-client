import React, { lazy, Suspense } from "react";
import DocsLayout from "../../../layouts/DocsLayout";

const Content = lazy(() => import("!babel-loader!mdx-loader!./Terms.mdx"));

function Terms() {
  return (
    <DocsLayout>
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </DocsLayout>
  );
}

export default Terms;
