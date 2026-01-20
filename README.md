# CLI-utility

## Problem Statement

When shutting down my laptop, I often have multiple applications running (such as Google Chrome, VS Code, etc.). Closing each application manually is time-consuming and inconvenient.

To solve this problem, I built a command-line utility that allows me to close running applications at once by executing a single command from the terminal.

## What this tool does

- Provides a CLI command that can be run from the terminal
- Uses Node.js to execute system-level commands
- Helps automate the process of quitting applications before shutdown
- Reduces manual effort and improves productivity

## How to run the program

- Prerequisites
  - Node.js 
  - npm installed
  - macOS (current implementation is macOS-specific)

- Setup the project
  - clone the repository nd install dependencies
  - Make the CLI Executable
  ```
    chmod +x src/index.js
  ```
  - Link the CLI command directly
  ```
    npm link
  ```
  - Run the command
  ```
    cli-utility
  ```

## Design decisions

#### Node.js for CLI development 

  -  Node js was chosen because: 
     - It is lightweight and fast for scripting tasks
     - has built-in support for executing stem commands(child_process)
     - makes it easy create cross-platform CLI tools

#### Minimal output

the utility runs silently unless an error occurs. This keeps the shutdown process clean and distraction-free.


## Conclusion

This CLI uitlity solves a real, personal problem by automating application shutdown through a single command. It demonstrates practical use of Node.js, CLI development fundamentals, and clean design principles.