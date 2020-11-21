function copy(input) {
  navigator.clipboard.writeText(input);
}
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    theUrl = "https://api.tf.yousefak.com" + theUrl
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
alert("Please make sure the url above starts with HTTPS not HTTP. Otherwise the obfuscation tool will not work properly!");