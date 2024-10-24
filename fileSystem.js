let fs = require('fs');

fs.writeFile('example.txt', 'This is my file', (err) => {
    
    if(err) throw err;
    console.log("File created and data written");

    fs.readFile('example.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        console.log('File read successfully. Content: ', data);

        fs.rename('example.txt', 'rename.txt', (err) => {
            if(err) throw err;
            console.log("File rename successfully");

            fs.unlink('rename.txt', (err) => {
                if(err) throw err;
                console.log("File deleted successfully");
            });

        });

    });

});


