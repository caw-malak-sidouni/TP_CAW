const fs = require('fs')

let occurrence
function main() {
    let arg = process.argv;
    let word = arg[2];
    let args = arg.slice(3);
    let files_mode
    let just_folder
    let wordAbsenceInFiles = 0
    let arrayOfSelectedFiles = []
    let arrayOfFiles = []
    let arrayOfMissingFiles = []
    let numberOfMissedFiles
    if (arg[3].match('.txt'))
        files_mode = true
    if (arg[4] === undefined)
        just_folder = true


    if (just_folder) {
        const folder = args.shift();
        try {
            arrayOfFiles = fs.readdirSync("./" + folder)
        } catch (e) {
            console.log(e)
        }
        arrayOfFiles.forEach(filename => {
            readFile(folder+filename, word);
        });
        if (occurrence === 0) {
            console.log("None")
        }
    } else if (files_mode) {
        args.forEach(file => {
            fs.readFile(file, function (err, data) {
                if (err) {
                    console.log("there is no such file '" + file)
                } else {
                    if (data.indexOf(word) >= 0) {
                        console.log('Found in: ' + file)
                    } else {
                        wordAbsenceInFiles++
                    }
                    if (wordAbsenceInFiles === args.length) {
                        console.log("NONE")
                    }
                }
            });
        });

    } else {
        const current_directory = args[0]
        fs.readdir(current_directory, function (err, files) {
            if (err) {
                console.log("there is no such directory " + current_directory)
            } else {
                for (let i = 0; i < files.length; i++) {
                    if (files[i].match('.txt')) {
                        arrayOfFiles.push(files[i])
                    }
                }
                for (let i = 1; i < args.length; i++) {
                    numberOfMissedFiles = 0
                    for (let j = 0; j < arrayOfFiles.length; j++) {
                        if (args[i] !== arrayOfFiles[j]) {
                            numberOfMissedFiles++
                        }
                    }
                    if (numberOfMissedFiles === arrayOfFiles.length) {
                        arrayOfMissingFiles.push(args[i])
                    }
                }
                arrayOfFiles.forEach(file => {
                    for (let i = 0; i < args.length; i++) {
                        if (args[i] === file) {
                            arrayOfSelectedFiles.push(file)
                        }
                    }
                })
                arrayOfSelectedFiles.forEach(file => {
                    fs.readFile(`${current_directory}/${file}`, function (err, data) {
                        if (err) {
                            console.log("there is no such file '" + file)
                        } else {
                            if (data.indexOf(word) >= 0) {
                                console.log('Found in: ' + file)
                            } else {
                                wordAbsenceInFiles++
                            }
                            if (wordAbsenceInFiles === arrayOfSelectedFiles.length) {
                                console.log("NONE")
                            }
                        }
                    })
                })
                arrayOfMissingFiles.forEach(file => {
                    console.log("there is no such file '" + file)
                })
            }
        })
    }
}

function readFile(filename, string) {
    let match
    const lines = fs.readFileSync(filename, 'utf8').split('\n');
    for (const line of lines) {
        match = line.match(string) ? 1 : 0;
        if (match) {
            console.log(filename);
            occurrence++
        }
    }
}

main()
//for files in root directory
// test : node ./grep.js "hello " example.txt example1.txt example2.txt
//for files in custom directory
// test : node ./grep.js "hello " files/ example.txt example1.txt example2.txt
//for folder only
// test : node ./grep.js "hello " files/files2