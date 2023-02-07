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
    },
    {
      family: 'Averta',
      variants: ['500', '600'],
      subsets: ['latin']
    }
  ]
}