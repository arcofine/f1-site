module.exports = {
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://f1simgt3.ddns.net:8804/:path*",
                     },
              ];
       },
};
