module.exports = {
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                          destination: "http://142.120.193.175/:8888/:path*"
                     },
              ];
       },
};
