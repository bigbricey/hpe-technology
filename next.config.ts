import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // === OLD DOMAIN REDIRECTS ===
      // hpe-technology.com was a Spanish industrial vacuum/pressure equipment company (2004-2024)
      // These 301 redirects capture backlink juice from 2,992 historical backlinks

      // Root-level old pages
      { source: "/index.htm", destination: "/", permanent: true },
      { source: "/index_noflash.html", destination: "/", permanent: true },
      { source: "/legal.htm", destination: "/disclaimer", permanent: true },
      { source: "/policy.htm", destination: "/privacy", permanent: true },

      // Spanish section → homepage (most backlinked section)
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/", permanent: true },

      // English section → homepage
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/", permanent: true },

      // Catalan section → homepage
      { source: "/ca", destination: "/", permanent: true },
      { source: "/ca/:path*", destination: "/", permanent: true },

      // DVP brand section → homepage
      { source: "/DVP/:path*", destination: "/", permanent: true },

      // Crelec brand section → homepage
      { source: "/Crelec/:path*", destination: "/", permanent: true },

      // PDF datasheets → homepage (these often get direct backlinks)
      { source: "/docs/:path*", destination: "/", permanent: true },

      // Old image paths (some may have backlinks from forums/directories)
      { source: "/Img/:path*", destination: "/", permanent: true },
      { source: "/media/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
