/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ["image.tmdb.org"] },
  env: {
    REACT_APP_TMDB_API_KEY_V3: process.env.REACT_APP_TMDB_API_KEY_V3,
  },
};
