module.exports = {
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                          destination: "http://206.172.240.123:8888/:path*"
                     },
              ];
       },
};
