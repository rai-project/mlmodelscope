#! /bin/bash

count=1

make $1

while [ $? -ne 0 ] && [ $count -le 5 ] 
do
	count=$((count + 1))
	make $1	
done
