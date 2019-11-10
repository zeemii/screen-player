const  {ipcRenderer} = require('electron');

let body = document.getElementsByTagName('html')[0];
body.addEventListener('click',()=>{console.log('test')})

