

# get top 50 videos for each user in people.txt
get_top_50_uploads()
{
    cat people.txt | while read line; do
        echo $line;
        curl -s "http://gdata.youtube.com/feeds/base/users/$line/uploads?v=2&alt=json&orderby=published&start-index=1&max-results=50" | dicter.py - | grep -E '\[entry\]' | grep -E '\[id\]' | cut -f2 -d"'" | cut -f4 -d: > people/$line.videos;
    done
}

# prints a two column file like: http://c.sente.cc/d9sf/cps_vids.txt
show_cp_videos ()
{
    for i in people/*;
    do
        bb=$(basename $i .videos);
        cat $i | while read line; do
            echo $bb $line;
        done;
    done
}



# get all the related videos for each video_id in <FILE>
get_user_related_vids ()
{
    file=$1;
    username="$(basename "$file")";
    username="$(basename $username .videos)";
    mkdir "related/$username";
    echo $username;
    cat $file | while read line; do
        echo $line;
        curl -s "http://gdata.youtube.com/feeds/api/videos/$line/related?v=2&alt=json&prettyprint=true" > "related/$username/$line.json";
    done
}




make_links()
{
    grep feeds/api/users/ related/*/*json | cut -f4 -d'"' | sort | uniq -c | sort -nr | awk '$1>5' | tr '/' '\t' | awk '{print $1, $7}' | while read a b; do
        echo "$a,<a href=\"http://www.youtube.com/user/$b\">$b</a><br>";
    done | postit cps.html
}


find_related_people()
{
 find related/*/*json |while read line; do dicter.py $line | cut -c1-100|grep entry|grep author|grep name |cut -f2 -d"'"; done | tee related_people.dat
}
