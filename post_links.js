
function collect_tags() {
    var dc = '';
    for (var i = 0; i < document.links.length; i++) {
        s = document.links[i].href;
        dc += s + '\n';
    }
    return dc;
}

function post_to_url(path, params, method) {

    method = method || "post";

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("target", "new");

    for(var key in params) {
        var textarea = document.createElement("textarea");
        textarea.setAttribute("name", key);
        textarea.appendChild(document.createTextNode(params[key]))
        form.appendChild(textarea);
    }
    document.body.appendChild(form);
    form.submit();
}

links = collect_tags();

post_to_url("http://www.sente.cc/cgi-bin/note.pl",{"note":links},"POST");
