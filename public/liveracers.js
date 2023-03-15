window._lr = {
       url: "https://liveracers.com",
       domains: ["f1sim"], //or multiple domains: ['domain1', 'domain2']
};
(function () {
       var lr = document.createElement("script");
       lr.type = "text/javascript";
       lr.async = true;
       lr.src = window._lr.url + "/Scripts/api.js";
       var s = document.getElementsByTagName("script")[0];
       s.parentNode.insertBefore(lr, s);
})();
