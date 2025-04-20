const fs = require('fs');

fs.writeFile('meedah.txt', 'Hi Hameedat', (err) => {
    if(err) throw err;
    console.log('Text Saved Successfully!')
});
fs.readFile('./meedah.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})