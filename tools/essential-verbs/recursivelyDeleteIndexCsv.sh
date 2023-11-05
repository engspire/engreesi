#!/bin/bash

# Set the directory where you want to perform the renaming
directory="./"

# Find all subdirectories and their first files
find "$directory" -type d | while read -r subdir; do
    file=$(ls "$subdir" | head -n 1)
    if [ -n "$file" ]; then
        echo "Deleting \"$subdir/index.csv\""
        rm "$subdir/index.csv"
    else
        echo "No files found in \"$subdir\""
    fi
done
