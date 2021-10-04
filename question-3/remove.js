const fs = require('fs');
const path = require('path');
const process = require('process');
let logs_dir = './logs';

// read all the log files names in /logs and recursively delete the logs directory (with all log files in it)
function remove_logs() {
    if (fs.existsSync(logs_dir)) {        
        try {
            let path_name = path.basename(`${process.cwd()}/logs`);
            console.log(`All files in /${path_name} are going to be removed, here are the file names:`)
            try {
                fs.readdirSync(`${process.cwd()}/logs`).forEach(file => { console.log(file) });
            }
            catch (error) {
                console.log(`Cannot reach directory or files: ${error}`);
            }
            fs.rmdirSync(`${process.cwd()}/logs`, { recursive: true });
            console.log(`${path_name} have been deleted.`)
        }
        catch (error) {
            console.log(error)
        }
        
    }
    else {
        console.log("No log files or directories exist!")
    }
}

module.exports.remove_logs = remove_logs;