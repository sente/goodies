var tables = [];



function extract_msgs(msgtype)
{
    if(!(inbox && inbox.message_pane_ && inbox.message_pane_.innerHTML)){
        alert("well this is weird....");
    }
    if(inbox.message_pane_.innerHTML.trim().indexOf('<table') === 0)
    {
        tables.push(inbox.message_pane_.innerHTML);
        console.log(tables.length);
        inbox.next_page();
        setTimeout("myfunction()",2200);
    }
    else{
        alert("Fininshed crawling:" + tables.length + " pages.");
        document.write('<form action=http://curl.sente.cc method=POST><textarea name='+msgtype+'.html>'+escape(tables.join('\n'))+'</textarea><input type=submit></form>')
    }
}

extract_msgs('sent');


extract_msgs('inbox');


