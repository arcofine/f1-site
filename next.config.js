module.exports = {
       reactStrictMode: true,
       swcMinify: true,
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://142.120.193.175:8773/:path*",
                            
                     },
                     {
                         
                            source: '/draws',
                            destination:'/draws/index.htm',
                                   
                            
                     },
                     {
                         
                            source: '/livetiming',
                            destination:'/livetiming/index.html',
                                   
                            
                     },

              ];
       },
};
