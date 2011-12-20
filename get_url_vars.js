
function decode(str) {
    return unescape(str.replace(/\+/g, " "));
}

function getUrlVars()
{
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars[hash[0]] = decode(hash[1]);
    }
    return vars;
}
var vars = getUrlVars();
