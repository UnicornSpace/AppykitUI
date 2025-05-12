import { allComponents } from "content-collections";
import React from "react";
type Params = Promise<{ component: string }>;
import { MDXContent } from "@content-collections/mdx/react";
import { components } from "@/components/mdx-component";
import "@/styles/code-block.css";

const page = async (props: { params: Params }) => {
  const params = await props.params;
  const { component } = params;
  const foundComponent = allComponents.find((c) => c.slug === component);
  console.log("foundComponent", foundComponent);
  return (
    <div className="max-w-3xl">

      <h1 className="text-3xl font-bold mb-1">
        {foundComponent?.title}
      </h1>
      <p className="text-muted-foreground mb-4">
        {foundComponent?.description}
      </p>
      {foundComponent?.mdx && (<MDXContent components={{ ...components }} code={foundComponent.mdx} />)}

    </div>
  );
};

export default page;
