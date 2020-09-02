const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    if (err) throw err;
    var output = 'echo ';

    //construct
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = String.fromCharCode(data[key]);
            if (element === '|' || element === '<' || element === '>' || element === '^' || element === '&') {
                output += '^' + element;
            } else if (element === '%') {
                output += '%' + element;
            } else if (element === '\n') {
                output += '\necho ';
            } else {
                output += element;
            }
        }
    }

    //save
    fs.writeFile('output.txt', output, (err) => {
        if (err) throw err;
        console.log('Saved');
    });
});
