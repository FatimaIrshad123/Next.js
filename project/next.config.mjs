/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
        ],
      },
    //images: {
      //  domains: ['images.unsplash.com']
    //}
};

export default nextConfig;
