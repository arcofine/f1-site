module.exports = {
       reactStrictMode: true,
       swcMinify: true,
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://f1simgt3.ddns.net:8805/:path*",
                            
                     },
                     {
                         
                            source: '/draws',
                            destination:'/draws/index.htm',
                                   
                            
                     },
                     {
                         
                            source: '/livetiming',
                            destination:'/livetiming/index.html',
                                   
                            
                     },
                     {
                            source: "/livetiming/:path*",
                            destination: "http://thirtheen-home.myddns.me:8802/:path*",
                            
                     },
                     //   {
                     //          source: "/dashboardGt/:path*",
                     //          destination: "http://thirtheen-home.myddns.me:8804/:path*",
                     //   },
              ];
       },
};
