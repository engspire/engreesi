#!/bin/bash

# Set the directory where you want to perform the renaming
directory="./"

# Define the prefix for the file names
prefix="EEV - Tables -"

# Find all subdirectories
find "$directory" -type d | while read -r subdir; do
    for file in "$subdir"/*; do
        if [ -e "$file" ]; then
            # Extract the file's name without the directory path
            filename=$(basename "$file")
            
            # Check if the filename has the specified prefix
            if [[ $filename == "${prefix}"* ]]; then
                new_file="${subdir}/index.csv"
                echo "Renaming \"$file\" to \"$new_file\""
                mv "$file" "$new_file"
            fi
        else
            echo "No files found in \"$subdir\""
        fi
    done
done
