

mkdir people

curl -s "http://gdata.youtube.com/feeds/base/users/sentesays/uploads?v=2&alt=json&orderby=published&start-index=1&max-results=50" | dicter.py - | grep -E '\[entry\]' | grep -E '\[id\]' | cut -f2 -d"'" | cut -f4 -d: > people/sentesays.videos;


# stu@sente $ find people/
# > people/
# > people/sentesays.videos


# stu@sente $ cat people/sentesays.videos
# > VnHs4rtlkAo
# > DeUjWtMJQnE
# > 178CH_DvHeA
# > xV7ACVDMvF0
# > _n7UDM8zpcg
# > 7UhN-zNuCyU
# > u-27oedRniE


mkdir related

get_user_related_vids ()
> {
>     file=$1;
>     username="$(basename "$file")";
>     username="$(basename $username .videos)";
>     mkdir "related/$username";
>     echo $username;
>     cat $file | while read line; do
>         echo $line;
>         curl -s "http://gdata.youtube.com/feeds/api/videos/$line/related?v=2&alt=json&prettyprint=true" > "related/$username/$line.json";
>     done
> }



get_user_related_vids people/sentesays.videos

# > sentesays
# > VnHs4rtlkAo
# > DeUjWtMJQnE
# > 178CH_DvHeA
# > xV7ACVDMvF0
# > _n7UDM8zpcg
# > 7UhN-zNuCyU
# > u-27oedRniE



for jsonfile in related/sentesays/*.json; do python ../show_related_videos.py $jsonfile; done | postit results.txt

# created http://c.sente.cc/UNe1/results.txt



