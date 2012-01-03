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
        setTimeout("extract_msgs()",2200);
    }
    else{
        alert("Fininshed crawling:" + tables.length + " pages.");
        //document.write('<form action=http://curl.sente.cc method=POST><textarea name='+msgtype+'.html>'+escape(tables.join('\n'))+'</textarea><input type=submit></form>')
    }
}


$inbox = $('a[id^=tab-inbox]')[0];
$sent = $('a[id^=tab-sent]')[0];


inbox.open_folder($sent);
extract_msgs('sent');


inbox.open_folder($inbox);
extract_msgs('inbox');


