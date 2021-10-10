import dynamic from "next/dynamic";
import config from "cms/config";
import React, { useEffect } from "react";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> },
);

const AdminPage = () => {
  useEffect(() => {
    import("netlify-cms-app")
      .then((x) => x.default)
      .then((CMS) => {
        CMS.registerPreviewStyle("/netlifycms.css");
      });
  }, []);
  return (
    <div>
      <CMS />
    </div>
  );
};

export default AdminPage;

