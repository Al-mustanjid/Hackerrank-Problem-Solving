'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
     // Write your code here
    let i, j, str='';
    for(i=0; i < n; i++)
    {
        for(let k=i; k < n-1; k++)
        {
            str += " ";
        }

        for(j=0; j <= i; j++)
        {
            //str += " ";
            str += "#";
        }
        str += "\n";
    }
    console.log(str);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
