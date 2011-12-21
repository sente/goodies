import sys
import simplejson
import os

"""
show_related_videos.py
~~~~~~~~~~~~


returns the authors and videoIDs contained within a JSON file

This script processes a JSON file passed from the command line, and prints a
4-column row for each ['feed']['entry'] in the file.

the first two columns are deduced from the filename, the 3rd column
is the js['feed']['entry'] author and the fourth column is the videoID

example:
python show_related_videos.py ./related/Ahanhbarbie34/17ejxRdiys4.json

Ahanhbarbie34   17ejxRdiys4     CarlyCristman   mWVjXIo6IMY
Ahanhbarbie34   17ejxRdiys4     beautycakez     9OFz8dietZQ
Ahanhbarbie34   17ejxRdiys4     VideojugBeauty  8JOWlSRs054
Ahanhbarbie34   17ejxRdiys4     LuxyHair        5MWoB--Wl4U
Ahanhbarbie34   17ejxRdiys4     FashionandMakeup321     3h24e4275YA
Ahanhbarbie34   17ejxRdiys4     shrutiarjunanand        1v9tmnwqOpA
Ahanhbarbie34   17ejxRdiys4     amrevolutions   1Mu_betPexI
...

ex input: http://c.sente.cc/HUpW/ex.json

"""


#file could be "related/Ahanhbarbie34/17ejxRdiys4.json"


file = sys.argv[1]
txt = open(file,'r').read()


#sets author to 'Ahanhbarbie34' in our example
#sets id to 17ejxRdiys4

abspath = os.path.abspath(file)
author = abspath.split('/')[-2]
id = abspath.split('/')[-1].replace('.json','')

js=simplejson.loads(txt)
entries = js['feed']['entry']

ar = []
for e in entries:
    ar.append([author, id, e['author'][0]['name']['$t'], e['id']['$t'].split(':')[-1]])

for a in ar:
    print '\t'.join(a)

