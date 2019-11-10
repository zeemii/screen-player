const fs = require('fs');
const path = require('path');

const FileSystem = {
  create: (filename,content) => {
    filename = './data/' + filename;
    fs.writeFile(filename,content, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

    return 'test';
  },
  read: (filename) =>{

  },
  delete: (filename)=>{

  }
};

module.exports = FileSystem;
