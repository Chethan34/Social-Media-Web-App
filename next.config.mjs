/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  webpack: (config, { isServer }) => {
    config.externals.push('@node-rs/argon2');
    if (!isServer) {
      config.externals.push('@node-rs/argon2-win32-x64-msvc');
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}/*`,
      },
    ],
  },
};

export default nextConfig;