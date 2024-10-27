// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    sassOptions: {
      implementation: "sass-embedded",
    },
  };
  return nextConfig;
};
