import React from "react";
import { allComponents } from "content-collections";

const page = () => {
  return (
    <div>
      <h1>Components</h1>
      <ul>
        {allComponents.map((post) => (
          <li key={post._meta.path}>
            <a href={`/components/${post._meta.path}`}>
              <h3>{post.title}</h3>
              {/* <p>{post.description}</p> */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
