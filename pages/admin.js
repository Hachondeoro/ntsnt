import dynamic from "next/dynamic";
import config from "cms/config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

import React from "react";

const AdminPage = () => {
  return (
    <div>
      <CMS />;
    </div>
  );
};

export default AdminPage;
