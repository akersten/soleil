#!/bin/sh

# This script builds the SCSS, Typescript, and other static files from source. It should be non-destructive and
# idempotent.

clear

echo "Soleil build started..."

echo "  Creating output directories..."

if  [ ! -d bin/css ]
then
    mkdir -p bin/css
fi
if  [ ! -d bin/js/lib ]
then
    mkdir -p bin/js/lib
fi

echo "  Building stylesheets..."

sass src/scss/index.scss bin/css/index.css

echo "  Copying libraries to output directory..."

cp node_modules/phaser-ce/build/phaser.js bin/js/lib/phaser.js

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
echo "Build complete - visit bin/index.html."
echo "-----------------------------------------------------------------------------------"