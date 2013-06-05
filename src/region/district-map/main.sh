#!/bin/bash

path="../../../data-process/region.raw"
out_path="../../../data-process/region-district/"

rm -rf $out_path
mkdir -p $out_path

for i in $path/*.raw; do
    name=$(echo $i | sed "s/.*region.raw.\(.*\).raw/\1/")
    out=$out_path$name
    sed -f district.pattern $i > $out.raw
    # count and sort
    sort $out.raw | uniq -c > $out.csv
done

sed -i "s/^ \+\(.*\) \+\(.*\)/\2,\1/" $out_path/*.csv
