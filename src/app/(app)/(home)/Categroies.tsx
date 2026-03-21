import CategoryDropdown from "./CategoryDropdown";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { ca } from "payload/i18n/ca";
import { Category } from "@/payload-types";

const Categroies = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    depth: 1,
    collection: "categories",
    pagination: false,
    where: { parent: { exists: false } },
  });

  const formattedData = categories.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Because of "depth: 1" we are confident "doc" will be a type of "Category"
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {formattedData.map((category) => (
          <div key={category.id}>
            <CategoryDropdown category={category} isActive={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categroies;
