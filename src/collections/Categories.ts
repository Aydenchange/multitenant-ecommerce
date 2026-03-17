import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "categories",
  },
  fields: [
    {
      name: "categories",
      type: "text",
      required: true,
    },
  ],
};
