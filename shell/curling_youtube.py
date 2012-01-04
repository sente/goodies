#!/usr/bin/python

import sys
import glob
import BeautifulSoup


def get_cmdline_files(parms):

    divs = []

    files = []
    for uri_or_glob in parms:
        files.extend(glob.glob(uri_or_glob) or [ uri_or_glob ])
    return files


def get_divs_from_files(files):

    divs = []
    for f in files:
        sys.stderr.write('processsing file: %s\n' % f)

        bs=BeautifulSoup.BeautifulSoup(open(f,'r'))
        divs.append(bs.find('div',{'id':'search-results'}))
    return divs

def prepare_body(divs):

    body = []
    for div in divs:
        html = '<div class="search-results">%s</div>' % div.prettify()
        for h in html.split('\n'):
            if 'data-thumb="' in h and 'src="' in h:
                h = h.replace('data-thumb=','ABCTOWN')
                h = h.replace('src=','data-thumb=')
                h = h.replace('ABCTOWN','src=')
            body.append(h)
    return body


def render_html(body):
    top = '''
    <html>
        <head>
            <link id="www-core-css" rel="stylesheet" href="http://s.ytimg.com/yt/cssbin/www-core-vflQBNa2o.css">
            <style>
                div.search-results { background-color:lightgrey; border:4px; width:600px; }
                div.result-item { padding:2px; background-color:lightgrey; }
                div.result-item:hover { background-color:white; }
            </style>
        </head>
    <body>
    %(BODY)s
    </body>
</html> ''' % { 'BODY':'\n'.join(body)}

    return top


def main():
    """main function"""
    files = get_cmdline_files(sys.argv[1:])
    divs = get_divs_from_files(files)
    body = prepare_body(divs)
    html = render_html(body)
    print html


if __name__ == '__main__':
    main()



