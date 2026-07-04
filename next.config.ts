import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory makes Next.js mis-infer the
  // workspace root — pin it to this project.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
