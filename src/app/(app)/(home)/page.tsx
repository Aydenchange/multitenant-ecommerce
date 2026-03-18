import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    collection: "categories",
    pagination: false,
    where: { parent: { equals: null } },
  });
  console.log(categories, "test");
  return <div className="p-4">{JSON.stringify(categories, null, 2)}</div>;
}
