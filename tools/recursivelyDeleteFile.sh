#!/bin/bash

# Set the directory where you want to perform the renaming
directory="./"

# TODO: Set the file name
filename=""

# Find all subdirectories and their first files
find "$directory" -type d | while read -r subdir; do
    file=$(ls "$subdir" | head -n 1)
    if [ -n "$file" ]; then
        echo "Deleting \"$subdir/$filename\""
        rm "$subdir/$filename"
    else
        echo "No files found in \"$subdir\""
    fi
done
