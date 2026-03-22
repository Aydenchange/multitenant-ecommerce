import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Categroies from "./Categroies";

const SearchFilter = () => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchIcon />
      <div>
        <Input placeholder="Search..." />
      </div>
      <div>
        <Categroies />
      </div>
    </div>
  );
};

export default SearchFilter;
