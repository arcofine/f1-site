(function () {
       //load css
       var appendStyleSheet = function (path) {
              var css = document.createElement("link");
              css.type = "text/css";
              css.rel = "stylesheet";
              css.href = path;
              document.getElementsByTagName("head")[0].appendChild(css);
       };
       appendStyleSheet("/styles/api.css");
       appendStyleSheet("/styles/rf.css");

       function TimeSpan(days, hours, minutes, seconds, milliseconds, format) {
              this.days = days || 0;
              this.hours = hours || 0;
              this.minutes = minutes || 0;
              this.seconds = seconds || 0;
              this.milliseconds = milliseconds || 0;
              this.format = format || "h:mm:ss.fff";
              this.totalMls = null;

              this.fromMls = function (mls) {
                     this.totalMls = mls;
                     this.days = Math.floor(mls / 86400000);
                     mls = mls - this.days * 86400000;
                     this.hours = Math.floor(mls / 3600000);
                     mls = mls - this.hours * 3600000;
                     this.minutes = Math.floor(mls / 60000);
                     mls = mls - this.minutes * 60000;
                     this.seconds = Math.floor(mls / 1000);
                     mls = mls - this.seconds * 1000;
                     this.milliseconds = mls;

                     return this;
              };

              this.fromSec = function (sec) {
                     return this.fromMls(sec * 1000);
              };

              this.getTotalMls = function () {
                     if (!Ext.isNumber(this.totalMls)) {
                            this.totalMls =
                                   this.milliseconds +
                                   this.seconds * 1000 +
                                   this.minutes * 60000 +
                                   this.hours * 3600000 +
                                   this.days * 86400000;
                     }
                     return this.totalMls;
              };

              this.getTotalSecs = function () {
                     return this.getTotalMls() / 1000;
              };

              this.reset = function () {
                     this.totalMls = null;
              };

              this.setFormat = function (format) {
                     this.format = format;
                     return this;
              };

              this.getString = function (format) {
                     format = format || this.format;
                     var result = "";

                     var consume = function (c, w) {
                            var count = 0;
                            while (w[count] == c) {
                                   count++;
                            }
                            return count;
                     };

                     var count = consume("d", format);
                     if (count > 0) {
                            result = this.days.toString();

                            while (result.length < count) result = "0" + result;
                            //add delimiter
                            result += format[count];
                            //remove '[d]d:' from format
                            format = format.substr(count + 1);
                     }

                     count = consume("h", format);
                     if (count > 0) {
                            result = this.hours.toString();

                            while (result.length < count) result = "0" + result;
                            //add delimiter
                            result += format[count];
                            //remove '[h]h:' from format
                            format = format.substr(count + 1);
                     }

                     count = consume("m", format);
                     if (count > 0) {
                            var minutesResult = this.minutes.toString();
                            while (minutesResult.length < count) minutesResult = "0" + minutesResult;
                            //add delimiter
                            result += minutesResult;

                            //check if there is another delimiter behind minutes
                            if (format.length > count) {
                                   result += format[count];
                                   //remove '[m]m:' from format
                                   format = format.substr(count + 1);
                            } else {
                                   return result;
                            }
                     }

                     count = consume("s", format);
                     if (count > 0) {
                            var secondsResult = this.seconds.toString();
                            while (secondsResult.length < count) secondsResult = "0" + secondsResult;
                            //add delimiter
                            result += secondsResult;

                            //check if there is another delimiter behind minutes
                            if (format.length > count) {
                                   result += format[count];
                                   //remove '[m]m:' from format
                                   format = format.substr(count + 1);
                            } else {
                                   return result;
                            }
                     }

                     count = consume("f", format);
                     if (count > 0) {
                            var mlsResult = Math.floor(this.milliseconds).toString();
                            while (mlsResult.length < count) mlsResult = "0" + mlsResult;
                            if (mlsResult.length > count) {
                                   mlsResult = mlsResult.substr(0, count);
                            }
                            //add delimiter
                            result += mlsResult;
                     }
                     return result;
              };
       }
       var themes = {
                     light: {},
                     dark: {},
              },
              orientation = {
                     vertical: {},
                     horizontal: {},
              },
              championshipsDefaults = {
                     minWidth: "250px",
                     minHeight: "300px",
                     height: "600px",
                     width: "250px",
                     theme: "light",
              },
              lang = {
                     g: {
                            ActiveServers: "Servers",
                            Join: "Join",
                            BestLap: "Best lap",
                            BestLaps: "Best laps",
                            Online: "Online",
                     },
                     sessionType: {
                            "Unknown": "Unknown",
                            "Practice": "Practice",
                            "Qualifying": "Qualifying",
                            "Warmup": "Warmup",
                            "Race": "Race",
                            "Testing": "Testing",
                            "-1": "Unknown",
                            "0": "Testing",
                            "1": "Practice",
                            "5": "Qualifying",
                            "6": "Warmup",
                            "7": "Race",
                     },
                     app: {
                            1: "rFactor",
                            2: "ARCA Sim Racing",
                            3: "rFactor 2",
                            4: "Turismo Carretera",
                            5: "Game Stock Car",
                            6: "Assetto Corsa",
                            7: "Automobilista",
                     },
              },
              timeFormat = "h:mm:ss";

       var tools = {
              ajax: {
                     supportsXMLHttpRequest2: function () {
                            if (!this.sampleXMLHttpRequest) {
                                   this.sampleXMLHttpRequest = new XMLHttpRequest();
                            }
                            return "withCredentials" in this.sampleXMLHttpRequest;
                     },
                     //Create a xmlHttpRequest object - this is the constructor.
                     getHTTPObject: function () {
                            var http = new XMLHttpRequest();
                            if (!("withCredentials" in http) && typeof XDomainRequest != "undefined") {
                                   http = new XDomainRequest();
                            }
                            if (http && http.withCredentials != "undefined") {
                                   try {
                                          http.withCredentials = true;
                                   } catch (err) {}
                            }
                            return http;
                     },
                     load: function (request) {
                            if (!request || !request.url) return;
                            var http = this.init(); //The XMLHttpRequest object is recreated at every call - to defeat Cache problem in IE
                            if (!http) return;
                            if (http.overrideMimeType) http.overrideMimeType("text/xml");

                            //Kill the Cache problem in IE.
                            if (request.unique) {
                                   var now = "uid=" + new Date().getTime();
                                   request.url += (request.url.indexOf("?") + 1 ? "&" : "?") + now;
                            }
                            http.open("GET", request.url, true);
                            http.onreadystatechange = function () {
                                   //Call a function when the state changes.
                                   if (http.readyState == 4) {
                                          //Ready State will be 4 when the document is loaded.
                                          if (http.status == 200) {
                                                 var result = "";
                                                 if (request.success) {
                                                        request.success(http.responseText);
                                                 }
                                          } else {
                                                 //An error occured
                                                 if (request.error) {
                                                        request.error(http.status);
                                                 }
                                          }

                                          if (request.complete) {
                                                 request.complete();
                                          }
                                   }
                            };
                            if (request.headers) {
                                   for (key in request.headers) {
                                          if (request.headers.hasOwnProperty(key)) {
                                                 http.setRequestHeader(key, request.headers[key]);
                                          }
                                   }
                            }
                            http.send(null);
                     },
                     init: function () {
                            return this.getHTTPObject();
                     },
              },
              jsonDecode: function (json) {
                     if (JSON) {
                            return JSON.parse(json);
                     } else if ($ && $.parseJson) {
                            $.parseJson(json);
                     } else {
                            eval("(function(){return " + json + ";})()");
                     }
              },
              rs: function (text) {
                     try {
                            var str = lang,
                                   path = text.split(".");
                            if (path.length == 1) {
                                   str = str.g;
                            }
                            for (var i = 0; i < path.length; i++) {
                                   str = str[path[i]];
                            }
                            if (arguments.length > 1) {
                                   for (i = 1; i < arguments.length; i++) {
                                          var reg = new RegExp("\\{" + (i - 1) + "\\}", "gm");
                                          str = str.replace(reg, arguments[i]);
                                   }
                            }
                            return str ? str : "[" + text + "]";
                     } catch (ex) {
                            return "[" + text + "]";
                     }
              },
              jsonp: (function () {
                     var counter = 0,
                            head,
                            window = this,
                            config = {};
                     function load(url, pfnError) {
                            var script = document.createElement("script"),
                                   done = false;
                            script.src = url;
                            script.async = true;

                            var errorHandler = pfnError || config.error;
                            if (typeof errorHandler === "function") {
                                   script.onerror = function (ex) {
                                          errorHandler({url: url, event: ex});
                                   };
                            }

                            script.onload = script.onreadystatechange = function () {
                                   if (
                                          !done &&
                                          (!this.readyState ||
                                                 this.readyState === "loaded" ||
                                                 this.readyState === "complete")
                                   ) {
                                          done = true;
                                          script.onload = script.onreadystatechange = null;
                                          if (script && script.parentNode) {
                                                 script.parentNode.removeChild(script);
                                          }
                                   }
                            };
                            if (!head) {
                                   head = document.getElementsByTagName("head")[0];
                            }
                            head.appendChild(script);
                     }
                     function encode(str) {
                            return encodeURIComponent(str);
                     }
                     function jsonp(options) {
                            options.callbackName = options.callbackName || config["callbackName"] || "callback";
                            var uniqueName = options.callbackName + "_json";
                            if (options.unique) {
                                   uniqueName += ++counter;
                            }
                            var query = (options.url || "").indexOf("?") === -1 ? "?" : "&",
                                   key;
                            options.params = options.params || {};
                            for (key in options.params) {
                                   if (options.params.hasOwnProperty(key)) {
                                          query += encode(key) + "=" + encode(options.params[key]) + "&";
                                   }
                            }
                            window[uniqueName] = function (data) {
                                   options.success(data);
                                   if (options.complete) {
                                          options.complete();
                                   }
                                   try {
                                          delete window[uniqueName];
                                   } catch (e) {}
                                   window[uniqueName] = null;
                            };
                            load(options.url + query + options.callbackName + "=" + uniqueName);
                            return uniqueName;
                     }
                     function setDefaults(obj) {
                            config = obj;
                     }
                     return {
                            get: jsonp,
                            init: setDefaults,
                     };
              })(),
              getChildByClass: function (el, className) {
                     for (var i = 0, il = el.childNodes.length; i < il; i++) {
                            var node = el.childNodes[i],
                                   classes = node.className != undefined ? node.className.split(" ") : [];
                            for (var j = 0, jl = classes.length; j < jl; j++) {
                                   if (classes[j] == className) return node;
                            }
                            // search recursively through childern of current child node
                            var res = tools.getChildByClass(node, className);
                            if (res) return res;
                     }
              },
       };

       var updateGamesTimeLeft = function () {
                     api.updateTimeLeft();
              },
              updateList = function () {
                     // api.setLogoClass("icon-med lr-loading");
                     var queryString = null;
                     if (window._lr.domains) {
                            queryString = "domains=" + window._lr.domains;
                     } else if (window._lr.domainKey) {
                            queryString = "domainKey=" + window._lr.domainKey;
                     }
                     if (tools.ajax.supportsXMLHttpRequest2()) {
                            tools.ajax.load({
                                   url: "https://liveracers.com/Public/api/Servers?" + queryString,
                                   success: function (data) {
                                          api.populateServers(tools.jsonDecode(data));
                                   },
                                   complete: function () {
                                          // api.setLogoClass("icon-med lr-logo-color-dark");
                                   },
                                   headers: {"Content-type": "application/json", "Accept": "application/json"},
                            });
                     } else {
                            tools.jsonp.get({
                                   url: "https://liveracers.com/Public/api/ServersJsonp?format=jsonp&" + queryString,
                                   success: function (data) {
                                          api.populateServers(data);
                                   },
                                   complete: function () {
                                          api.setLogoClass("icon-med lr-logo-color-dark");
                                   },
                            });
                     }
                     setTimeout(updateList, 60000);
              },
              updateChampionshipsSize = function () {
                     function getDocHeight(doc) {
                            doc = doc || document;
                            // stackoverflow.com/questions/1145850/
                            var body = doc.body,
                                   html = doc.documentElement;
                            var height = Math.max(
                                   body.scrollHeight,
                                   body.offsetHeight,
                                   html.clientHeight,
                                   html.scrollHeight,
                                   html.offsetHeight
                            );
                            return height;
                     }

                     let ifrm = document.getElementById("lr-championships-frame");
                     var doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document;
                     ifrm.style.visibility = "hidden";
                     ifrm.style.height = "10px"; // reset to minimal height ...
                     // IE opt. for bing/msn needs a bit added or scrollbar appears
                     ifrm.style.height = getDocHeight(doc) + 4 + "px";
                     ifrm.style.visibility = "visible";
              },
              api = {
                     servers: [],
                     championshipsRoot: null,
                     championshipsFrame: null,
                     //serversList: false,
                     // width: false,
                     canjoin: true,
                     games: false,
                     lastUpdate: false,
                     timeLeftInterval: false,
                     // scans document for target widgets and initializes them
                     init: function () {
                            var serversRoot = document.getElementById("lr-servers");
                            if (serversRoot) {
                                   this.servers = [serversRoot];
                            }

                            var url = window._lr.url,
                                   baseUrl = url.substr(url.indexOf("//") + 2),
                                   parts = baseUrl.split(".");

                            if (!(window._lr.domains || window._lr.domainKey | (parts.length > 2))) {
                                   throw "Missing { window._lr.domains = ['address']; } config pointing to your [address].liveracers.com";
                            }

                            if (this.servers.length > 0) {
                                   this.createServers();
                                   updateList();
                                   this.timeLeftInterval = setInterval(updateGamesTimeLeft, 1000);
                            }

                            var champsRoot = document.getElementById("lr-championships");
                            if (champsRoot) {
                                   this.championshipsRoot = champsRoot;
                                   this.createChampionships();
                            }
                     },
                     configureServersRoot: function (el) {
                            var theme = el.getAttribute("theme");
                            if (!(theme in themes)) {
                                   theme = "light";
                            }
                            var orient = el.getAttribute("orientation");
                            if (!(orient in orientation)) {
                                   orient = "vertical";
                            }

                            var width = el.getAttribute("width");
                            if (width) {
                                   el.width = width;
                            }

                            var canjoin = el.getAttribute("canjoin");
                            if (canjoin) {
                                   el.canjoin = canjoin.toLowerCase() === "true";
                            }

                            var filter = el.getAttribute("filter");
                            if (filter) {
                                   el.filter = window[filter];
                                   el.filterFunctionName = filter;
                            }

                            el.className = theme + " " + orient;

                            if (orient === "vertical" && width) {
                                   el.style.width = width;
                            }
                     },
                     createChampionships: function () {
                            var theme = this.championshipsRoot.getAttribute("theme");
                            if (!(theme in themes)) {
                                   theme = championshipsDefaults.theme;
                            }
                            let width = this.championshipsRoot.getAttribute("width") || championshipsDefaults.width;
                            let height = this.championshipsRoot.getAttribute("height") || championshipsDefaults.height;

                            let url =
                                   window._lr.url +
                                   "/Public/ChampionshipWidget/Index?domains=" +
                                   (window._lr.domains || "");
                            url += "&theme=" + theme + "-theme";

                            let html =
                                   '<iframe id="lr-championships-frame" src="' +
                                   url +
                                   '" frameborder="0" allowfullscreen allowtransparency="true" style="width:' +
                                   width +
                                   ";height:" +
                                   height +
                                   ";min-width:" +
                                   championshipsDefaults.minWidth +
                                   ";min-height:" +
                                   championshipsDefaults.minHeight +
                                   ';"></iframe>';

                            this.championshipsRoot.innerHTML = html;

                            this.championshipsFrame = this.championshipsRoot.getElementsByTagName("iframe")[0];
                     },
                     createServers: function () {
                            for (var i = 0, l = this.servers.length; i < l; i++) {
                                   var el = this.servers[i],
                                          rootHtml = new Array();

                                   this.configureServersRoot(el);

                                   var redirectAddress = window._lr.domains
                                          ? "/Home/RedirectToDomain?domains=" + (window._lr.domains || "")
                                          : "";

                                   rootHtml.push("<div class='lr-servers-content'></div>");

                                   el.innerHTML = rootHtml.join("");
                                   // el.logo = tools.getChildByClass(el, "lr-servers-logo");
                                   el.content = tools.getChildByClass(el, "lr-servers-content");
                            }
                     },
                     // set class name on all servers logos element
                     // setLogoClass: function (className) {
                     //        for (var i = 0, l = this.servers.length; i < l; i++) {
                     //               this.servers[i].logo.className = className;
                     //        }
                     // },
                     // update time left on each game
                     updateTimeLeft: function () {
                            for (var i = 0, il = this.servers.length; i < il; i++) {
                                   var server = this.servers[i];
                                   if (server.games) {
                                          var timeElapsed = (new Date() - server.lastUpdate) / 1000;
                                          for (var j = 0, jl = server.games.length; j < jl; j++) {
                                                 var game = server.games[j];
                                                 if (game.tr) {
                                                        game.tr.innerHTML = new TimeSpan()
                                                               .fromSec(Math.max(0, game.TimeRemaining - timeElapsed))
                                                               .setFormat(timeFormat)
                                                               .getString();
                                                 }
                                          }
                                   }
                            }
                     },
                     // populate all server roots. Apply filtering if specified
                     populateServers: function (games) {
                            for (var i = 0, l = this.servers.length; i < l; i++) {
                                   var serverRoot = this.servers[i],
                                          serverGames = games;

                                   if (serverRoot.filter) {
                                          serverGames = [];
                                          for (var i = 0, il = games.length; i < il; i++) {
                                                 var game = games[i];
                                                 try {
                                                        if (serverRoot.filter(game)) {
                                                               serverGames.push(game);
                                                        }
                                                 } catch (ex) {
                                                        // in case of exceptions, push the game
                                                        serverGames.push(game);

                                                        setTimeout(function () {
                                                               throw new Error(
                                                                      'Failed calling filter function on LiveRacers live servers "window.' +
                                                                             serverRoot.filterFunctionName +
                                                                             " = " +
                                                                             serverRoot.filter.toString() +
                                                                             '". Error: ' +
                                                                             ex
                                                               );
                                                        }, 0);
                                                 }
                                          }
                                   }

                                   this.populateServer(serverGames, serverRoot);
                            }
                     },
                     populateServer: function (games, serverRoot) {
                            serverRoot.games = games;
                            serverRoot.lastUpdate = new Date();
                            var newContent = new Array();
                            var filterFunc;
                            for (var i = 0, il = games.length; i < il; i++) {
                                   var game = games[i],
                                          hasTr = false;

                                   if (!game.DriverNames) {
                                          game.DriverNames = "";
                                          game.DriversCount = 0;
                                   } else {
                                          game.DriversCount = game.DriverNames.length;
                                          var driverNames = new Array();
                                          for (var j = 0; j < game.DriversCount; j++) {
                                                 driverNames.push(j + 1 + "." + game.DriverNames[j]);
                                          }
                                          game.DriverNames = driverNames.join(" ");
                                   }

                                   var bestLap = "";
                                   if (!game.BestLaps) {
                                          game.BestLaps = "";
                                   } else {
                                          var bestLaps = new Array();
                                          for (var j = 0; j < game.BestLaps.length; j++) {
                                                 var bl = game.BestLaps[j],
                                                        lt = new TimeSpan().fromSec(bl.T).getString("m:ss:fff");
                                                 if (j == 0) {
                                                        bestLap = lt;
                                                 }
                                                 bestLaps.push(
                                                        j + 1 + ". " + lt + " (" + bl.D + ", " + bl.C + ")<br />"
                                                 );
                                          }
                                          game.BestLaps = bestLaps.join(" ");
                                   }

                                   newContent.push('<div class="gameInfo ', game.SessionType, '"');

                                   if (serverRoot.width) newContent.push(' style="width:', serverRoot.width, '"');

                                   newContent.push(">", '<div class="details"');
                                   if (serverRoot.width) newContent.push(' style="width:', serverRoot.width, '"');
                                   newContent.push(">");

                                   if (serverRoot.canjoin) {
                                          newContent.push(
                                                 '<div class="join"><a class="with-icon-med" href="',
                                                 game.JoinLink,
                                                 '" target="_blank"><div class="icon-med add"></div><span>',
                                                 tools.rs("Join"),
                                                 "</span></a></div>"
                                          );
                                   }

                                   if (game.DriversCount > 0) {
                                          newContent.push(
                                                 '<div class="drivers"><span>',
                                                 tools.rs("Online"),
                                                 "</span>",
                                                 '<div class="values">',
                                                 game.DriverNames,
                                                 "</div>",
                                                 "</div>"
                                          );
                                   }

                                   if (bestLap.length > 0) {
                                          newContent.push(
                                                 '<div class="bestLaps"><span>',
                                                 tools.rs("BestLaps"),
                                                 "</span>",
                                                 '<div class="values">',
                                                 game.BestLaps,
                                                 "</div>",
                                                 "</div>"
                                          );
                                   }

                                   var sessionTypeText = "";
                                   if (game.SessionType) {
                                          sessionTypeText = tools.rs("sessionType." + game.SessionType);
                                          if (game.OriginalSessionType) {
                                                 sessionTypeText += " [" + game.OriginalSessionType + "]";
                                          } else if (game.Version) {
                                                 sessionTypeText += " " + game.Version;
                                          }
                                          sessionTypeText = '<div class="session">' + sessionTypeText + "</div>";
                                   }

                                   var trackText = game.TrackName;

                                   if (game.TrackTemperature) {
                                          trackText =
                                                 "<span>" +
                                                 Math.round(game.TrackTemperature) +
                                                 "°C " +
                                                 game.TrackName +
                                                 "</span>";
                                   }

                                   newContent.push(
                                          "</div>",
                                          '<div class="body" title="">',
                                          '<div class="g-info-wrapper">',
                                          '<div class="g-info">',
                                          '<div class="g-app ' + game.SessionType + '">',
                                          sessionTypeText,
                                          "</div>",
                                          '<div class="g-header"><a target="_blank" href=' + game.Link + ">",
                                          game.GameName,
                                          "</a></div>",
                                          // '<div title="',
                                          // game.Mod,
                                          // '">',
                                          // game.Mod,
                                          // "</div>",
                                          '<div title="',
                                          game.TrackName,
                                          '">',
                                          trackText,
                                          "</div>",
                                          "</div>",
                                          "</div>",
                                          '<div class="g-side-wrapper">',
                                          '<div class="g-side">',
                                          '<div class="drivers with-icon-med"><span>',
                                          game.DriversCount,
                                          '</span><div class="icon-med helmet"></div></div>',
                                          '<div class="bestLap" title="',
                                          tools.rs("BestLap"),
                                          '">',
                                          bestLap,
                                          "</div>"
                                   );

                                   if (game.AmbientTemperature) {
                                          var weatherContent, weatherTitle;

                                          if (game.Rain) {
                                                 weatherContent = [
                                                        "<span> ",
                                                        Math.round(game.Rain * 100),
                                                        "%</span>",
                                                        '<i class="rf rf-rain"></i>',
                                                 ];
                                                 weatherTitle = "Raining";
                                          } else if (game.Cloud) {
                                                 weatherContent = [
                                                        "<span> ",
                                                        Math.round(game.Cloud * 100),
                                                        "%</span>",
                                                        '<i class="rf rf-cloudy"></i>',
                                                 ];
                                                 weatherTitle = "Cloudy";
                                          } else {
                                                 weatherContent = ['<i class="rf rf-sun"></i>'];
                                                 weatherTitle = "Sunny";
                                          }
                                          newContent.push(
                                                 '<div class="weather" title="',
                                                 weatherTitle,
                                                 '"><span>',
                                                 Math.round(game.AmbientTemperature),
                                                 "</span>"
                                          );
                                          newContent = newContent.concat(weatherContent);
                                          newContent.push("</div>");
                                   }

                                   // if (game.DriversCount > 0) {
                                   //        newContent.push('<div class="remaining">');

                                   //        if (game.CurrentET > 0 && game.EndET > 0) {
                                   //               game.TimeRemaining = Math.max(0, game.EndET - game.CurrentET);
                                   //               var tr = new TimeSpan()
                                   //                      .fromSec(game.TimeRemaining)
                                   //                      .setFormat(timeFormat);
                                   //               newContent.push('<div class="timeLeft">', tr.getString(), "</div>");
                                   //               game.hasTr = true;
                                   //        }
                                   //        if (game.MaxLaps > 0) {
                                   //               newContent.push(
                                   //                      '<div class="lapsLeft">',
                                   //                      game.LapsCompleted || 0,
                                   //                      "/",
                                   //                      game.MaxLaps,
                                   //                      "</div>"
                                   //               );
                                   //        }
                                   //        newContent.push("</div>");
                                   // }
                                   newContent.push("</div></div></div></div>");
                            }

                            serverRoot.content.innerHTML = newContent.join("");

                            var gameElements = serverRoot.content.children;
                            for (i = 0; i != gameElements.length; i++) {
                                   var body = tools.getChildByClass(gameElements[i], "body");
                                   var game = games[i];
                                   if (game.hasTr) {
                                          game.tr = tools.getChildByClass(body, "timeLeft");
                                   }
                            }
                     },
              };
       if (!window._lr.loaded) {
              window._lr.loaded = true;

              window;

              var ready = (function () {
                     var readyList,
                            DOMContentLoaded,
                            class2type = {};
                     class2type["[object Boolean]"] = "boolean";
                     class2type["[object Number]"] = "number";
                     class2type["[object String]"] = "string";
                     class2type["[object Function]"] = "function";
                     class2type["[object Array]"] = "array";
                     class2type["[object Date]"] = "date";
                     class2type["[object RegExp]"] = "regexp";
                     class2type["[object Object]"] = "object";

                     var ReadyObj = {
                            // Is the DOM ready to be used? Set to true once it occurs.
                            isReady: false,
                            // A counter to track how many items to wait for before
                            // the ready event fires. See #6781
                            readyWait: 1,
                            // Hold (or release) the ready event
                            holdReady: function (hold) {
                                   if (hold) {
                                          ReadyObj.readyWait++;
                                   } else {
                                          ReadyObj.ready(true);
                                   }
                            },
                            // Handle when the DOM is ready
                            ready: function (wait) {
                                   // Either a released hold or an DOMready/load event and not yet ready
                                   if (
                                          (wait === true && !--ReadyObj.readyWait) ||
                                          (wait !== true && !ReadyObj.isReady)
                                   ) {
                                          // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                                          if (!document.body) {
                                                 return setTimeout(ReadyObj.ready, 1);
                                          }

                                          // Remember that the DOM is ready
                                          ReadyObj.isReady = true;
                                          // If a normal DOM Ready event fired, decrement, and wait if need be
                                          if (wait !== true && --ReadyObj.readyWait > 0) {
                                                 return;
                                          }
                                          // If there are functions bound, to execute
                                          readyList.resolveWith(document, [ReadyObj]);

                                          // Trigger any bound ready events
                                          //if ( ReadyObj.fn.trigger ) {
                                          //  ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                                          //}
                                   }
                            },
                            bindReady: function () {
                                   if (readyList) {
                                          return;
                                   }
                                   readyList = ReadyObj._Deferred();

                                   // Catch cases where $(document).ready() is called after the
                                   // browser event has already occurred.
                                   if (document.readyState === "complete") {
                                          // Handle it asynchronously to allow scripts the opportunity to delay ready
                                          return setTimeout(ReadyObj.ready, 1);
                                   }

                                   // Mozilla, Opera and webkit nightlies currently support this event
                                   if (document.addEventListener) {
                                          // Use the handy event callback
                                          document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
                                          // A fallback to window.onload, that will always work
                                          window.addEventListener("load", ReadyObj.ready, false);

                                          // If IE event model is used
                                   } else if (document.attachEvent) {
                                          // ensure firing before onload,
                                          // maybe late but safe also for iframes
                                          document.attachEvent("onreadystatechange", DOMContentLoaded);

                                          // A fallback to window.onload, that will always work
                                          window.attachEvent("onload", ReadyObj.ready);

                                          // If IE and not a frame
                                          // continually check to see if the document is ready
                                          var toplevel = false;

                                          try {
                                                 toplevel = window.frameElement == null;
                                          } catch (e) {}

                                          if (document.documentElement.doScroll && toplevel) {
                                                 doScrollCheck();
                                          }
                                   }
                            },
                            _Deferred: function () {
                                   var // callbacks list
                                          callbacks = [],
                                          // stored [ context , args ]
                                          fired,
                                          // to avoid firing when already doing so
                                          firing,
                                          // flag to know if the deferred has been cancelled
                                          cancelled,
                                          // the deferred itself
                                          deferred = {
                                                 // done( f1, f2, ...)
                                                 done: function () {
                                                        if (!cancelled) {
                                                               var args = arguments,
                                                                      i,
                                                                      length,
                                                                      elem,
                                                                      type,
                                                                      _fired;
                                                               if (fired) {
                                                                      _fired = fired;
                                                                      fired = 0;
                                                               }
                                                               for (i = 0, length = args.length; i < length; i++) {
                                                                      elem = args[i];
                                                                      type = ReadyObj.type(elem);
                                                                      if (type === "array") {
                                                                             deferred.done.apply(deferred, elem);
                                                                      } else if (type === "function") {
                                                                             callbacks.push(elem);
                                                                      }
                                                               }
                                                               if (_fired) {
                                                                      deferred.resolveWith(_fired[0], _fired[1]);
                                                               }
                                                        }
                                                        return this;
                                                 },

                                                 // resolve with given context and args
                                                 resolveWith: function (context, args) {
                                                        if (!cancelled && !fired && !firing) {
                                                               // make sure args are available (#8421)
                                                               args = args || [];
                                                               firing = 1;
                                                               try {
                                                                      while (callbacks[0]) {
                                                                             callbacks.shift().apply(context, args); //shifts a callback, and applies it to document
                                                                      }
                                                               } finally {
                                                                      fired = [context, args];
                                                                      firing = 0;
                                                               }
                                                        }
                                                        return this;
                                                 },

                                                 // resolve with this as context and given arguments
                                                 resolve: function () {
                                                        deferred.resolveWith(this, arguments);
                                                        return this;
                                                 },

                                                 // Has this deferred been resolved?
                                                 isResolved: function () {
                                                        return !!(firing || fired);
                                                 },

                                                 // Cancel
                                                 cancel: function () {
                                                        cancelled = 1;
                                                        callbacks = [];
                                                        return this;
                                                 },
                                          };

                                   return deferred;
                            },
                            type: function (obj) {
                                   return obj == null
                                          ? String(obj)
                                          : class2type[Object.prototype.toString.call(obj)] || "object";
                            },
                     };
                     // The DOM ready check for Internet Explorer
                     function doScrollCheck() {
                            if (ReadyObj.isReady) {
                                   return;
                            }

                            try {
                                   // If IE is used, use the trick by Diego Perini
                                   // http://javascript.nwbox.com/IEContentLoaded/
                                   document.documentElement.doScroll("left");
                            } catch (e) {
                                   setTimeout(doScrollCheck, 1);
                                   return;
                            }

                            // and execute any waiting functions
                            ReadyObj.ready();
                     }
                     // Cleanup functions for the document ready method
                     if (document.addEventListener) {
                            DOMContentLoaded = function () {
                                   document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                                   ReadyObj.ready();
                            };
                     } else if (document.attachEvent) {
                            DOMContentLoaded = function () {
                                   // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                                   if (document.readyState === "complete") {
                                          document.detachEvent("onreadystatechange", DOMContentLoaded);
                                          ReadyObj.ready();
                                   }
                            };
                     }
                     return function (fn) {
                            // Attach the listeners
                            ReadyObj.bindReady();
                            // Add the callback
                            readyList.done(fn); //readyList is result of _Deferred()
                     };
              })();

              ready(function () {
                     api.init();
              });
       }
})();
