/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },

      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: 'encrypted-tbn1.gstatic.com'
      }
    ],
  },
};

export default nextConfig;
