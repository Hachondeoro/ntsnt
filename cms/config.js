export default {
  cms_manual_init: true,
  backend: {
    name: "git-gateway",
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
      identifier_field: "title",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Short Description", name: "shortDescription", widget: "text" },
        { label: "Project Details", name: "projectDetails", widget: "markdown" },
        {
          label: "Images",
          name: "image",
          widget: "list",
          summary: "{{fields.image}}",
          field: { label: "Image", name: "image", widget: "image" },
        },
      ],
    },
    {
      label: "Commercial Projects",
      name: "commercialprojects",
      folder: "public/commercial",
      create: true,
      extension: "json",
      identifier_field: "title",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Short Description", name: "shortDescription", widget: "text" },
        { label: "Project Details", name: "projectDetails", widget: "markdown" },
        {
          label: "Images",
          name: "image",
          widget: "list",
          summary: "{{fields.image}}",
          field: { label: "Image", name: "image", widget: "image" },
        },
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
                { label: "Description", name: "description", widget: "text" },
                { label: "Image", name: "image", widget: "image" },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Employment",
      name: "employment",
      extension: "json",
      files: [
        {
          label: "Introduction",
          name: "introduction",
          file: "/public/content/introduction.json",
          fields: [
            { name: "introduction", label: "Introduction", widget: "string" },
            { name: "content", label: "Content", widget: "markdown" },
          ],
        },
        {
          label: "Features",
          name: "features",
          file: "/public/content/features.json",
          fields: [
            {
              label: "Features",
              name: "features",
              widget: "list",
              fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Description", name: "description", widget: "markdown" },
                { label: "Image", name: "image", widget: "image" },
              ],
            },
          ],
        },
        {
          label: "Positions",
          name: "positions",
          file: "/public/content/positions.json",
          fields: [
            { name: "positions", label: "Positions", widget: "string" },
            { name: "positions_list", label: "Positions list", widget: "markdown" },
            { name: "requirements", label: "Requirements", widget: "string" },
            { name: "requirements_list", label: "Requirements list", widget: "markdown" },
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
