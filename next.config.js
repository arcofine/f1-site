module.exports = {
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://thirtheen-home.myddns.me:8800/:path*",
                     },
              ];
       },
};
