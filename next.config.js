module.exports = {
       async rewrites() {
              console.log("Rewrites called");
              return process.env.NODE_ENV === "development"
                     ? [
                              {
                                     source: "/:path*",
                                     destination: "http://thirtheen-home.myddns.me:8802/:path*",
                              },
                              //   {
                              //          source: "/dashboardGt/:path*",
                              //          destination: "http://thirtheen-home.myddns.me:8804/:path*",
                              //   },
                       ]
                     : [];
       },
};
