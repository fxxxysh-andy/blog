/*
function load(name)
{
    let xhr = new XMLHttpRequest(),okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}
 
let text = load("all.json");
//console.log(text);
*/
var back;

var req = new XMLHttpRequest();
req.open('GET', 'all.json');

req.onload = function() {
    if (req.status == 200) {
      // do what you want, here, with the req.response
      // take a look at the object that gets returned, you may need
      // to call JSON.parse(), etc.
      console.log('success', req.response);
      back=JSON.parse(req.response);
    } else {
      console.log('error', req.statusText);
    }
};

// Handle network errors
req.onerror = function() {
    console.log("Network Error");
};

// Make the request
req.send();

var len=1;
while(len<back.length)
{
    var wr="<div id=\"blog\"><a href=\""+back[len].id+\"<h2>"+back[len].title+"</h2></a></div>";
    document.write(wr);
}

