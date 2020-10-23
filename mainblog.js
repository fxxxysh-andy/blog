var back;

var req = new XMLHttpRequest();
req.open('GET','all.json',false);
req.overrideMimeType("text/plain;charset=utf-8");//默认为utf-8

req.onload = function() {
    if (req.status == 200&&req.readyState==4) {
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

var len=0;
while(len<back.length)
{
    var wr="<div class=\"blog\"><a href=\"mp/"+back[len].id+"\"><h2>"+back[len].title+"</h2></a><p class=\"cu\">时间:"+back[len].time+"</p></div>";
    document.getElementById("body").innerHTML+=wr;
    //document.write(wr);
    len++;
}

