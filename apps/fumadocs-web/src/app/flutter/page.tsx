import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-[70dvh]">
      <h1 className="font-medium text-2xl">Flutter</h1>
      <div className="space-x-5 text-blue-600">
        <Link href={"/course/flutter"}>Course</Link>
        <Link href={"/flutter/blocks"}>Blocks</Link>
        <Link href={"/flutter/resources"}>Resources</Link>
      </div>
    </div>
  );
};

export default page;
