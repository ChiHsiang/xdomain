//require latest XDomain distribution
var xdomain = require("../../dist/0.6/xdomain").xdomain;

xdomain.debug = true;

xdomain.slaves({
  'http://s3.amazonaws.com':'/jpillora-usa/xdomain/0.6/proxy.html'
});

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://s3.amazonaws.com/jpillora-usa/xdomain/data2.json");
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4)
    document.querySelector("pre").innerHTML = xhr.responseText;
};
xhr.send();
