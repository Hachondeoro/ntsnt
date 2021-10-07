import dynamic from "next/dynamic";
// config.yml created in public folder

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-gray-500 font-semibold text-xl" >Loading...</p>
  </div>
);

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.init();
    }),
  { ssr: false, loading: Loading }
);

import React from "react";

const AdminPage = () => {
  return (
    <div>
      <CMS />
    </div>
  );
};

export default AdminPage;
