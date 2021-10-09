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
        {
          label: "Images",
          name: "images",
          collapsed: true,
          widget: "list",
          summary: "{{fields.image}}",
          field: { label: "Image", name: "image", widget: "image" },
        },
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
      label: "Home",
      name: "home",
      extension: "json",
      files: [
        {
          label: "Background Images",
          name: "backgrounds",
          file: "/public/content/backgrounds.json",
          fields: [
            {
              label: "Images",
              name: "images",
              widget: "list",
              summary: "{{fields.image}}",
              field: { label: "Image", name: "image", widget: "image" },
            },
          ],
        },
        {
          label: "Description one",
          name: "descriptionone",
          file: "/public/content/descriptionone.json",
          fields: [
            { name: "title", label: "Title", widget: "string" },
            { name: "content", label: "Content", widget: "markdown" },
          ],
        },
        {
          label: "Description two",
          name: "descriptiontwo",
          file: "/public/content/descriptiontwo.json",
          fields: [
            { name: "title", label: "Title", widget: "string" },
            { name: "content", label: "Content", widget: "markdown" },
          ],
        },
        {
          label: "Awards",
          name: "awards",
          file: "/public/content/awards.json",
          fields: [
            {
              label: "Images",
              name: "images",
              widget: "list",
              summary: "{{fields.image}}",
              fields: [
                { name: "title", label: "Title", widget: "string" },
                { label: "Image", name: "image", widget: "image" },
              ],
            },
          ],
        },
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
          file: "/public/content/aboutus.json",
          fields: [
            { name: "image", label: "Image", widget: "image" },
            { name: "content", label: "Content", widget: "markdown" },
          ],
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
          file: "/public/content/ourservices.json",
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
    {
      label: "Contact",
      name: "contact",
      extension: "json",
      files: [
        {
          label: "Contact Information",
          name: "contact",
          file: "/public/content/contact.json",
          fields: [
            { label: "Address", name: "address", widget: "string" },
            { label: "Postal Address", name: "postaladdress", widget: "string" },
            { label: "Phone", name: "phone", widget: "string" },
            { label: "Email", name: "email", widget: "string" },
          ],
        },
      ],
    },
  ],
};
