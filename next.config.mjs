/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         unoptimized: false, // Server-side rendering can optimize images
//     },
// };

// export default nextConfig;