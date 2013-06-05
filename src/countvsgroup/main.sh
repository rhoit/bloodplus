#!/bin/bash

path="../../data"
out="../../data-process/countvsgroup.csv"
rm $out

for i in $path/*; do
    wc -l $i >> $out
done

sed -i "s/.csv$//g; s/data/,/g; s/[.\/]//g; s/ //g" $out
sed "s/\(.*\),\(.*\)/\2,\1/" $out
#cat $out
