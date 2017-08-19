#!/bin/sh

# This script builds the SCSS, Typescript, and other static files from source. It should be non-destructive and
# idempotent.

clear

echo "Soleil build started..."

echo "  Building stylesheets..."

if  [ ! -d bin/css ]
then
    mkdir -p bin/css
fi

sass src/scss/bulma.scss static/css/bin/bulma.css

#echo "  Building scripts..."

#rm -rf static/js/bin/
#if  [ ! -d static/js/bin ]
#then
#    mkdir -p static/js/bin
#fi
#tsc

#echo "  Bundling scripts..."
##browserify static/js/bin/base.js -o static/js/bin/base.bundled.js
#for f in $(find static/js/bin/react-apps/ -name '*.js'); do echo "    $f"; browserify $f -o ${f%.*}.bundled.js; done

echo "-----------------------------------------------------------------------------------"
echo "Build complete - visit bin/index.html.
echo "-----------------------------------------------------------------------------------"