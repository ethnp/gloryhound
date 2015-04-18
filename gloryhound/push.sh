#!/bin/sh
# this assumes you created the openshift directory in your home directory
# modify the script if this is not the case
 
meteor build prod
cp prod/gloryhound.tar.gz ../../openshift
rm prod/mymeteordemo.tar.gz
cd ../../openshift
tar -xvf gloryhound.tar.gz -s '/^bundle//'
rm gloryhound.tar.gz
git add .
git commit -am "a change"
git push
