module.exports = {
       reactStrictMode: true,
       swcMinify: true,
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://thirtheen-home.myddns.me:8802/:path*",
                            
                     },
                     {
                         
                            source: '/draws',
                            destination:'/draws/index.htm',
                                   
                            
                     }
                     //   {
                     //          source: "/dashboardGt/:path*",
                     //          destination: "http://thirtheen-home.myddns.me:8804/:path*",
                     //   },
              ];
       },
};
