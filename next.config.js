module.exports = {
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://thirtheen-home.myddns.me:8804/:path*",
                     },
                     //   {
                     //          source: "/dashboardGt/:path*",
                     //          destination: "http://thirtheen-home.myddns.me:8804/:path*",
                     //   },
              ];
       },
};
