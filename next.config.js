module.exports = {
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://theovox-rdp.ddns.net:8803/:path*",
                     },
              ];
       },
};
