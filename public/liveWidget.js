window._lr = {
       url: ["https://www.f1sim.ca/live/`"],
       query: ["get_data?name=rFactor2%20Dedicated.exe15184"], //or multiple domains: ['domain1', 'domain2']
};
(function () {
       var lr = document.createElement("script");
       lr.type = "text/javascript";
       lr.async = true;
       lr.src = window._lr.url + "/apiTools.js";
       var s = document.getElementsByTagName("script")[0];
       s.parentNode.insertBefore(lr, s);
})();
// window._lr = {
//        url: "https://liveracers.com",
//        domains: ["f1sim"], //or multiple domains: ['domain1', 'domain2']
// };
// (function () {
//        var lr = document.createElement("script");
//        lr.type = "text/javascript";
//        lr.async = true;
//        lr.src = window._lr.url + "/Scripts/api.js";
//        var s = document.getElementsByTagName("script")[0];
//        s.parentNode.insertBefore(lr, s);
// })();
