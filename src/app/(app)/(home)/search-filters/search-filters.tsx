import { getPayload } from "payload";
import Categroies from "./categroies";
import configPromise from "@payload-config";
import SearchInput from "./search-input";

const SearchFilter = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    depth: 1,
    collection: "categories",
    pagination: false,
    sort: "name",
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
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <Categroies data={formattedData} />
    </div>
  );
};

export default SearchFilter;
