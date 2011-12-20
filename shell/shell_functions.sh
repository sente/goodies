

# get top 50 videos for each user in people.txt
get_top_50_uploads()
{
    cat people.txt | while read line; do
        echo $line;
        curl -s "http://gdata.youtube.com/feeds/base/users/$line/uploads?v=2&alt=json&orderby=published&start-index=1&max-results=50" | dicter.py - | grep -E '\[entry\]' | grep -E '\[id\]' | cut -f2 -d"'" | cut -f4 -d: > people/$line.videos;
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




