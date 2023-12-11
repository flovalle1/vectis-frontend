const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  //basePath: isProduction ? '/vectis-frontend' : '',
  assetPrefix: isProduction ? '/vectis-frontend/' : '',
};
