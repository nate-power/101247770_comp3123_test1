// Nathan Power - 101247770
// GitHub Repo - https://github.com/nate-power/101247770_comp3123_test1

let remove = require('./remove');
let add = require('./add');

//first, remove log files and directory, if it exists
console.log("Step 1: Remove Log files\n");
remove.remove_logs();

//then, create log directory and files
console.log("\nStep 2: Create Log files\n");
add.create_logs_dir();
add.change_process();
add.create_log_files();



