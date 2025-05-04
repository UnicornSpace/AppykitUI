import { allComponents } from "content-collections";
import React from "react";
type Params = Promise<{ component: string }>;

const page = async (props: { params: Params }) => {
  const params = await props.params;
  const { component } = params;
  const foundComponent = allComponents.find((c) => c.slug === component);
  console.log("foundComponent", foundComponent);
  return (
    <div>
      page
      {foundComponent?.title}
      {foundComponent?.description}
      {foundComponent?.content}
    </div>
  );
};

export default page;
