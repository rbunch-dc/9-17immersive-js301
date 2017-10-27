const fs = require('fs');

fs.readdir('./data', (err, files) => {
	files.map((fileName,index) => {
		console.log(index,fileName);
		fs.readFile(`./data/${fileName}`, (err, data) => {
			console.log(fileName);
			if (err) throw err;
			// console.log(data);
		});
	});
})