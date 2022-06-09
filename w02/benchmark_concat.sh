#!/usr/bin/env bash

NUM=$1
SCRIPT_PATH=$2

START=$(date +%s%N)
for i in `seq 1 $NUM`
do
    node $SCRIPT_PATH
done

END=$(date +%s%N)
DIFF=$((($END - $START) / 1000000))
echo BENCHMARK COMPLETE
echo "Total time of execution: $DIFF ms"
