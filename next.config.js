module.exports = {
       reactStrictMode: true,
       swcMinify: true,
       async rewrites() {
              return [
                     {
                            source: "/:path*",
                            destination: "http://206.172.240.123:8773/:path*",
                            
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
