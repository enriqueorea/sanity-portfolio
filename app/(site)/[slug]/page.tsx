import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

import React from "react";

interface IProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: IProps) => {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1 className="drop-shadow text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-700 bg-clip-text text-transparent">
        {page.title}
      </h1>
      <div className="text-lg list-disc text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
};

export default Page;
