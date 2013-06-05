#!/bin/bash

path="../../data"
out="../../data-process/countvsgroup.csv"
rm $out

for i in $path/*; do
    wc -l $i >> $out
done

sed -i "s/.csv$//g; s/data/\t/g; s/[.\/]//g; s/ //g" $out
cat $out
