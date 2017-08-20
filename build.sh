#!/bin/sh

# This script builds the SCSS, Typescript, and other static files from source.

clear

echo "Soleil build started..."

echo "  Getting ready..."
rm -rf bin/

echo "  Creating output directories..."

if  [ ! -d bin/css ]
then
    mkdir -p bin/css
fi
if  [ ! -d bin/js/lib ]
then
    mkdir -p bin/js/lib
fi
if [ ! -d bin/img ]
then
    mkdir -p bin/img
fi

echo "  Building stylesheets..."

sass src/scss/index.scss bin/css/index.css

echo "  Copying libraries to output directory..."

cp node_modules/phaser-ce/build/phaser.js bin/js/lib/phaser.js
cp node_modules/phaser-ce/build/custom/pixi.js bin/js/lib/pixi.js
cp node_modules/phaser-ce/build/custom/p2.js bin/js/lib/p2.js

echo "  Copying files..."

cp index.html bin/index.html
cp -r src/img/. bin/img/

echo "  Building scripts..."

cp tsconfig.json tsconfig.json.bak
sed -i '/#STRIP#/d' ./tsconfig.json
tsc
rm tsconfig.json
mv tsconfig.json.bak tsconfig.json

echo "  Bundling scripts..."
browserify bin/js/soleil.js -o bin/js/soleil.bundled.js
#for f in $(find bin/js/ -name '*.js'); do echo "    $f"; browserify $f -o ${f%.*}.bundled.js; done


if [ ! -d ~/localhost ]
then
    echo "-----------------------------------------------------------------------------------"
    echo "Build complete."
    echo "-----------------------------------------------------------------------------------"
    exit
fi

echo "-----------------------------------------------------------------------------------"
echo "Build complete - copying to local webserver directory."
echo "-----------------------------------------------------------------------------------"
rm -rf ~/localhost/soleil
mkdir ~/localhost/soleil
cp -r bin/. ~/localhost/soleil