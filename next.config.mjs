/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  webpack: (config, { isServer }) => {
    // Ignore the @node-rs/argon2 module on both client and server
    config.externals.push('@node-rs/argon2');
    
    // For non-server builds, also ignore the specific platform module
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
  rewrites: () => {
    return [
      {
        source: "/hashtag/:tag",
        destination: "/search?q=%23:tag",
      },
    ];
  },
};

export default nextConfig;