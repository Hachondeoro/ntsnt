export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "Hachondeoro/ntsnt",
    branch: "master",
  },
  media_folder: "/public/images",
  public_folder: "/images",
  // publish_mode: "editorial_workflow",
  logo_url: "https://www.ntsnt.com.au/images/ntsnt%20logo.png",
  collections: [
    {
      label: "Residential Projects",
      name: "residentialprojects",
      folder: "public/residential",
      create: true,
      extension: "json",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Images", name: "images", widget: "list", summary: '{{fields.image}}', field: { label: "Image", name: "image", widget: "image" } },
        { label: "Description", name: "description", widget: "text", required: false },
        { label: "Project Details", name: "project_details", widget: "markdown", required: false },
      ],
    },
    {
      label: "Commercial Projects",
      name: "commercialprojects",
      folder: "public/commercial",
      extension: "json",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Image", name: "image", widget: "image", required: false },
        { label: "Description", name: "description", widget: "text", required: false },
        { label: "Project Details", name: "project_details", widget: "markdown", required: false },
      ],
    },
    {
      label: "About Us",
      name: "aboutus",
      extension: "json",
      files: [
        {
          label: "About Us",
          name: "aboutus",
          file: "/public/aboutus.json",
          fields: [{ name: "title", label: "Title", widget: "markdown" }],
        },
      ],
    },
    {
      label: "Our Services",
      name: "ourservices",
      extension: "json",
      files: [
        {
          label: "Our Services",
          name: "ourservices",
          file: "/public/ourservices.json",
          fields: [
            {
              label: "Services",
              name: "services",
              widget: "list",
              fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Description", name: "description", widget: "text", required: false },
                { label: "Image", name: "image", widget: "image", required: false },
              ],
            },
          ],
        },
      ],
    },
  ],
};
