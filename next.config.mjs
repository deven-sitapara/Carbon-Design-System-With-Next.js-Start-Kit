// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,

    sassOptions: {
      implementation: "sass-embedded",
    },
  };
  return nextConfig;
};
