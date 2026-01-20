#!/usr/bin/env node

const {execSync} = require('child_process');

const EXCLUDED_APPS = ["System Settings", "Google Chrome", "Visual Studio Code", "Finder"];

function getRunningApplications() {
    const script = `
        tell application "System Events"
            get name of (processes where background only is false)
        end tell
    `;
    const result = execSync(`osascript -e '${script}'`).toString().trim();
    console.log("Running applications before exclusion:", result);
    return result.split(', ').filter(app => !EXCLUDED_APPS.includes(app));
}

function quitApplications(apps, force){
    try {
        const command = force 
        ? `osascript -e 'tell application "${apps}" to quit saving no'`
        : `osascript -e 'tell application "${apps}" to quit'`;
        execSync(command);
        console.log(`Successfully quit applications: ${apps}`);
    } catch (error) {
        console.log(`Failed to quit applications: ${apps}. Error: ${error.message}`);
    }
}

function main(){
    console.log("Closing running applications...\n");

    const apps = getRunningApplications();
    if(apps.length === 0){
        console.log("No running applications found.");
        return;
    }
    console.log(`Found running applications: ${apps}\n`);

    apps.forEach(quitApplications);
    console.log("\nAll possible applications processed!");
}

main();