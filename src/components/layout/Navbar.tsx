import Link from "next/link";
import React from "react";
import MaxContainer from "../common/MaxContainer";
import SearchBar from "../common/SearchBar";
import { Plus } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <div className=" bg-zinc-900 ">
    <MaxContainer>
      <div className="flex text-white justify-between items-center py-4">
        <Link className="text-2xl" href={'/'}>
        logo
        </Link>
        <div className="flex gap-4 items-center ">
         <SearchBar />
          <Link href={"/create"} className="flex border rounded-full px-2 py-1 hover:shadow-md hover:shadow-orange-50">create blog <span><Plus/></span></Link>
        </div>
      </div>
    </MaxContainer>
    </div>
  );
};

export default Navbar;
