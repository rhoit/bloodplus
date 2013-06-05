#!/bin/bash

path="../../data"
out_path="../../data-process/region/"

rm -r $out_path
mkdir -p $out_path

for i in $path/*; do
    name=$(echo $i | sed "s/.*data\/\(.*\).csv/\1/")
    out=$out_path$name
    cut -f6 $i | tr [A-Z] [a-z] > $out.raw
    #sed -i 's/[0-9,. ]//g' $out.raw
    # all in one
    cat $out.raw >> $out_path/total.raw
    # count and sort
    sort $out.raw | uniq -c > $out.csv
done

sort $out_path/total.raw | uniq -c > $out_path/total.csv

sed -i "s/^ \+\(.*\) \+\(.*\)/\2,\1/" $out_path/*.csv
# cat $out
