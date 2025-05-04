import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'
import { withContentCollections } from "@content-collections/next";


const nextConfig: NextConfig = {
  /* config options here */
};

export default withPayload(withContentCollections(nextConfig))

