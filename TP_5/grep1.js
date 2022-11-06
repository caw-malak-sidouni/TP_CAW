const fs = require('fs');
let occurrence=0
function main() {
    let args = process.argv.slice(2);
    let string = args.shift();
    args.forEach(filename => {
        readFile(filename, string);
    });
    if (occurrence===0){
        console.log("None")
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
// node .\grep1.js "he " example.txt example1.txt example2.txt