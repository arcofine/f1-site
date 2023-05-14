window._lr = {
       url: "",
       domains: ["f1sim", "f1simcanada-gt3"], //or multiple domains: ['domain1', 'domain2']
};
(function () {
       var lr = document.createElement("script");
       lr.type = "text/javascript";
       lr.async = true;
       lr.src = window._lr.url + "/api.js";
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
