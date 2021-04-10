import React, { lazy, Suspense } from "react";
import DocsLayout from "../../../layouts/DocsLayout";

const Content = lazy(() => import("!babel-loader!mdx-loader!./Privacy.mdx"));

function Privacy() {
  return (
    <DocsLayout>
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </DocsLayout>
  );
}

export default Privacy;
