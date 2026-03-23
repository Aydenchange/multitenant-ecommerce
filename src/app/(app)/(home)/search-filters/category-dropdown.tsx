"use client";

import SubcategoryMenu from "./subcategory-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import { useState } from "react";

interface CategoryDropdownProps {
  category: Category;
  isActive: boolean;
  isNavigationHovered: boolean;
}

const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: CategoryDropdownProps) => {
  const [openSubCategories, setOpenSubCategories] = useState(false);

  return (
    <div className="relative">
      <div
        className="relative"
        onMouseMove={() => setOpenSubCategories(true)}
        onMouseLeave={() => setOpenSubCategories(false)}
      >
        <Button
          className={cn(
            "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
            isActive && !isNavigationHovered && "bg-white border-primary",
          )}
        >
          {category.name}
        </Button>
        <SubcategoryMenu category={category} isOpen={openSubCategories} />
      </div>
    </div>
  );
};

export default CategoryDropdown;
