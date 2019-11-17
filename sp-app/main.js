const {app, BrowserWindow, Menu} = require('electron')
const FileSystem = require('./modules/FileSystem.js');

let win;

function createWindow() {

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'ZeeMii DESKTOP AI',
    kiosk: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  let result = FileSystem.create('test', 'content');

  function setKioskMode() {
    if (win.isKiosk() === true) {
      win.setKiosk(false);
    } else {
      win.setKiosk(true);
    }
  }

  // and load the index.html of the app.
  win.loadFile(`${__dirname}/dist/index.html`)



  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow();
  const template = [
    {
      label: 'Settings',
      click: () => {
        settings()
      },
      submenu: [
        {
          label: 'Kiosk Mode',
          click: () => {
            if (win.isKiosk() === true) {
              win.setKiosk(false);
            } else {
              win.setKiosk(true);
            }
          }
        },
        {
          label: 'Develop tools',
          click: () => {
            win.webContents.openDevTools()
          }
        }
      ]

    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Exit',
          role: 'quit'
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});


const settings = () => {

};

