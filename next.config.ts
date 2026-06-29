import type { NextConfig } from "next";
import { SITE_BASE_PATH } from "./lib/constants";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: SITE_BASE_PATH,
  assetPrefix: SITE_BASE_PATH,
};

export default nextConfig;