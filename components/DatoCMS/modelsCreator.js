const SiteClient = require("datocms-client").SiteClient;
const client = new SiteClient("63d389d8e59414c427dc34d53958d0");

// Create TEAM MEMBERS
client.itemTypes
  .create({
    name: "Team Member",
    apiKey: "teammember",
    singleton: false,
    sortable: true,
    modularBlock: false,
    draftModeActive: false,
    tree: false,
    orderingDirection: null,
    collectionAppearance: "compact",
    orderingField: null,
    titleField: null,
  })
  .then((itemType) => {
    console.log(itemType);
  })
  .catch((error) => {
    console.error(error);
  });

// Fields
client.fields.create("teammember", {
  label: "Name",
  fieldType: "string",
  apiKey: "name",
  position: 1,
  fieldset: null,
});

client.fields.create("teammember", {
  label: "Email",
  fieldType: "string",
  apiKey: "email",
  position: 2,
  fieldset: null,
});

client.fields.create("teammember", {
  label: "Role",
  fieldType: "string",
  apiKey: "role",
  position: 3,
  fieldset: null,
});
client.fields.create("teammember", {
  label: "Image",
  fieldType: "file",
  apiKey: "image",
  position: 4,
  fieldset: null,
});
client.fields.create("teammember", {
  label: "Description",
  fieldType: "text",
  apiKey: "description",
  position: 5,
  fieldset: null,
});
// npm install express -g
// cd ~/mynodeproject/
// npm link datocms-client

// node
// .editor

// Create Projects
client.itemTypes
  .create({
    name: "Project",
    apiKey: "project",
    singleton: false,
    sortable: true,
    modularBlock: false,
    draftModeActive: false,
    tree: false,
    orderingDirection: null,
    collectionAppearance: "compact",
    orderingField: null,
    titleField: null,
  })
  .then((itemType) => {
    console.log(itemType);
  })
  .catch((error) => {
    console.error(error);
  });

// Fields
client.fields.create("project", {
  label: "Title",
  fieldType: "string",
  apiKey: "title",
  position: 1,
  fieldset: null,
});

client.fields.create("project", {
  label: "Image",
  fieldType: "file",
  apiKey: "image",
  position: 3,
  fieldset: null,
});

