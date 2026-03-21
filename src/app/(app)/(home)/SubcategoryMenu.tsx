import { Category } from "@/payload-types";
import Link from "next/link";

interface SubcategoryMenuProps {
  data: Category;
  isOpen: boolean;
}

const SubcategoryMenu = ({ data, isOpen }: SubcategoryMenuProps) => {
  if (!isOpen || !data.subcategories || data.subcategories.length === 0) {
    return null;
  }

  return (
    <div className="fixed z-100">
      {data.subcategories.map((subcategory) => (
        <Link
          key={subcategory.id}
          href={`/categories/${subcategory.id}`}
          className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
        >
          {subcategory.name}
        </Link>
      ))}
    </div>
  );
};

export default SubcategoryMenu;
