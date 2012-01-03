#!/bin/bash



function query_youtube()
{
    # Usage:  query_youtube "search+string" <output-dir>
    #   queries youtube 50 times and save the search results

    query=$1;
    outdir="$2";
    mkdir $outdir || ( echo "dir already exists" && return 1 );
    AGENT="Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.63 Safari/535.7";
    for ((PAGE=1; PAGE<=50; PAGE++))
    do
        curl -A "$AGENT" -s "http://www.youtube.com/results?search_query="$query"&page=$PAGE" > "${outdir}/$PAGE.html";
        wc "${outdir}/$PAGE.html";
        sleep 2;
    done
}
