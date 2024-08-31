const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.handle('read-file', (event, args) => {
    var data = fs.readFileSync('test.txt').toString()
    console.log(data)
    return data
  })

  ipcMain.on('write-file', (event, data) => {
    fs.writeFileSync('test.txt', data)
  })

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})