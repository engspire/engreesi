#!/bin/bash

# Set the directory where you want to perform the copying and running
directory="./"

# Set the name of the source script
source_script="generateExamples.js"

# Set the name of the target script to run using node
node_script="generateExamples"

# Define the source script
source_script_path="${directory}${source_script}"

# Check if the source script exists
if [ -f "$source_script_path" ]; then
    # Find all subdirectories
    find "$directory" -type d | while read -r subdir; do
        if [ "$subdir" != "$directory" ]; then
            # Define the target script name within each subdirectory
            target_script="${subdir}/${node_script}"

            # Copy the script from the source to the subdirectory
            cp -f "$source_script_path" "$target_script"

            echo "Copied '$source_script' to \"$subdir\" as '$node_script'"

            # Check if the script exists in the subdirectory after copying
            if [ -f "$target_script" ]; then
                echo "Running 'node $node_script' in \"$subdir\""
                # (cd "$subdir" && node $node_script)
            else
                echo "No '$node_script' script found in \"$subdir\""
            fi
        fi
    done
else
    echo "No '$source_script' found in \"$directory\" to copy into subdirectories"
fi
