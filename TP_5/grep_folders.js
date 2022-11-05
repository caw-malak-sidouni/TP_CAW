const fs = require('fs');
let arrayOfFiles
let occurrence=0
function main() {
    let args = process.argv.slice(2);
    if(args[0]==='-r'){
        args.shift();
        let string = args.shift();
        const folder = args.shift();
        try {
            arrayOfFiles = fs.readdirSync("./"+folder)
        } catch(e) {
            console.log(e)
        }
        arrayOfFiles.forEach(filename => {
            readFile(filename, string);
        });
        if (occurrence===0){
            console.log("None")
        }
    }else{
        let string = args.shift();
        args.forEach(filename => {
            readFile(filename, string);
        });
        if (occurrence===0){
            console.log("None")
        }
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

main();
//test
// node .\grep_folders.js -r "he " files
