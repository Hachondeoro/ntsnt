export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "Hachondeoro/ntsnt",
    branch: "main",
  },
  media_folder: "static",
  public_folder: "static",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Description",
              name: "hero_description",
              widget: "markdown",
            },
            {
              label: "Hero Image",
              name: "hero_image",
              widget: "image",
            },
          ],
        },
      ],
    },
  ],
};
