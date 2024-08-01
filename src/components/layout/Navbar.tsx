import Link from "next/link";
import React from "react";
import MaxContainer from "../common/MaxContainer";

const Navbar: React.FC = () => {
  return (
    <div className=" bg-zinc-900 ">
    <MaxContainer>
      <div className="flex text-white justify-between items-center py-4">
        <Link className="text-2xl" href={'/'}>
        logo
        </Link>
        <div className="flex gap-2">
          <p>icon</p>
          <Link href={"/create"}>create blog</Link>
        </div>
      </div>
    </MaxContainer>
    </div>
  );
};

export default Navbar;
