"use client";

import SubcategoryMenu from "./SubcategoryMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import Link from "next/link";
import { useState } from "react";

interface CategoryDropdownProps {
  category: Category;
  isActive: boolean;
}

const CategoryDropdown = ({ category, isActive }: CategoryDropdownProps) => {
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
            isActive && "bg-white border-primary",
          )}
        >
          {category.name}
        </Button>
        <SubcategoryMenu data={category} isOpen={openSubCategories} />
      </div>
    </div>
  );
};

export default CategoryDropdown;
