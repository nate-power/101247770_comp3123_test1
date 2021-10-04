const fs = require('fs');
const path = require('path');
const process = require('process');
let logs_dir = './logs';

// create the directory for logs
function create_logs_dir() {    
    if (!fs.existsSync(logs_dir)) {
        fs.mkdirSync(logs_dir);
    }
    else {
        console.log("Already exists!");
    }
};

// change current working directory to the newly created /logs directory
function change_process() {
    if (fs.existsSync(logs_dir)) {
        process.chdir(`./logs`);
    }   
};

// create 10 log files with text and print the names of them to the console
function create_log_files() {  
    if (path.basename(process.cwd()) == 'logs') {
        let file_name;
        console.log(`All files in /${path.basename(process.cwd())}`);
        for (let i = 0; i < 10; i++) {
            file_name = `textfile${i + 1}.txt`;
            fs.writeFile(file_name, `This is the text for "${file_name}"!`, function (error) {
                if (error) {
                    console.log('error', error);
                }
            });
            console.log(file_name);
        }
        console.log("10 text files have been created!");  
    }   
}

module.exports.create_logs_dir = create_logs_dir;
module.exports.change_process = change_process;
module.exports.create_log_files = create_log_files;


