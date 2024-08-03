import MaxContainer from "@/components/common/MaxContainer";
import React from "react";
import AddBlogForm from "@/components/common/AddBlogForm";

const page = () => {
  return (
    <div>
      <MaxContainer>
      <div className="text-center bg-zinc-700 text-white my-4 p-4 rounded-md ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl  py-4">let&apos;s create your Blog</h1>
          </div>
       <AddBlogForm/>
      </MaxContainer>
    </div>
  );
};

export default page;
