/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old single-CV link, still shared in places: point it at the current English CV
      { source: "/cv/Ahmed_Hajji_IT_CV.pdf", destination: "/cv/Ahmed_Hajji_CV_EN.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
