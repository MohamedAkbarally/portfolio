export default {
  name: "certificate",
  title: "Cerficiate",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["work", "formal", "online"], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
  ],
};
