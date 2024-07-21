/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        staleTimes: {
            dynamic: 30,
        },
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node$/,
            use: 'node-loader',
        });

        return config;
    },
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:"utfs.io",
                pathname:`/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}`
            },
        ],
    },
};

export default nextConfig;
