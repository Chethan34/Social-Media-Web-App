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
    }
};

export default nextConfig;
