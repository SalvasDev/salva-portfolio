/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig,
{
  // ...
  webfonts: [
    {
      family: 'Poppins',
      variants: ['300','400','500', '600','700'],
      subsets: ['latin']
    }
  ]
}