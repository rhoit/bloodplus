#!/bin/bash

file="../../../stuffs/district"
sed 's/\(.*\)\t\(.*\)/s\/\1\/\2\/g/g' $file > /tmp/dump
cat /tmp/dump | tr [A-Z] [a-z] > district.pattern
cat district.pattern
